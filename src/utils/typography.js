import Typography from "typography";
import theme from "../config/theme";

const typography = new Typography({
    baseFontSize: theme.font.fontSize,
    baseLineHeight: theme.font.lineHeight,
    googleFonts: [
        {
            name: "Caveat Brush",
            styles: []
        },
        {
            name: theme.font.fontName,
            styles: []
        }
    ],
    headerFontFamily: theme.font.fontFamily,
    bodyFontFamily: theme.font.fontFamily
});

export default typography;
