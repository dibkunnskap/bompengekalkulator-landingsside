const {BlobServiceClient, BlobClient} = require("@azure/storage-blob");
const fs = require("fs");
const path = require("path");

const getAllFiles = function (dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
};

async function main() {
    const publicFolder = path.normalize(`../public/`);
    console.log(`folder`, publicFolder);
    let files = getAllFiles(publicFolder);
    files = files.map((file) =>
        file
            .substring(publicFolder.length)
            .replace(/\\/g, `$`)
            .replace(/\$/g, `/`)
    );
    console.log(`------------------------------`);
    console.log(files);

    const blobServiceClient = await BlobServiceClient.fromConnectionString(
        process.env.AZURE_STORAGE_CONNECTION_STRING
    );

    const containerClient = await blobServiceClient.getContainerClient("$web");

    for await (const blob of containerClient.listBlobsFlat()) {
        let blobClient = new BlobClient(
            process.env.AZURE_STORAGE_CONNECTION_STRING,
            "$web",
            blob.name
        );

        if (!files.includes(blob.name)) {
            await blobClient
                .delete({deleteSnapshots: `include`})
                .then((res) => {
                    console.log(`delete`, blob.name);
                });
        } else if (
            //if html file, app-data.json file, sw.js file, in page-data/ folder
            blob.name.endsWith(`.html`) ||
            blob.name.endsWith(`app-data.json`) ||
            blob.name.endsWith(`/sw.js`) ||
            blob.name.startsWith(`page-data/`)
        ) {
            await blobClient
                .setHTTPHeaders({
                    blobCacheControl: `public, max-age=0, must-revalidate`,
                    blobContentDisposition: blob.properties.contentDisposition,
                    blobContentEncoding: blob.properties.contentEncoding,
                    blobContentLanguage: blob.properties.contentLanguage,
                    blobContentMD5: blob.properties.contentMD5,
                    blobContentType: blob.properties.contentType
                })
                .then((res) => {
                    console.log(`ohboy!`, blob.name);
                });
        }
    }
}

main()
    .then(() => console.log("Done"))
    .catch((ex) => console.log(ex.message));
