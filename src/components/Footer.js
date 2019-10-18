import React from "react";
import {Link} from "gatsby";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(theme => ({
    footer: {
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        backgroundColor: theme.palette["neutral-050"],
        padding: theme.spacing["12"],
        color: theme.palette["neutral-600"]
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        maxWidth: "720px",
        "& > div": {
            flex: "1",
            textAlign: "center"
        }
    },
    links: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette["neutral-500"],
        "& a": {
            color: theme.palette["neutral-500"],
            fontSize: theme.fontSize["16"],
            margin: theme.spacing["16"]
        }
    },
    link: {
        font: "inherit",
        textDecoration: "none"
    },
    logo: {
        fontFamily: "Caveat Brush !important",
        fontSize: "24px",
        color: theme.palette["neutral-400"]
    },
    contact: {
        color: theme.palette["neutral-500"],
        fontSize: theme.fontSize["16"],
        margin: "0",
        whiteSpace: "nowrap"
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <div className={classes.content}>
                <div>
                    <a
                        className={`${classes.link} ${classes.logo}`}
                        href="https://bompengekalkulator.no"
                    >
                        bompengekalkulator.no
                    </a>
                </div>
                <div className={classes.links}>
                    <Link className={classes.link} to="/">
                        Om
                    </Link>
                    |
                    <Link className={classes.link} to="/blogg">
                        Blogg
                    </Link>
                    |
                    <Link className={classes.link} to="/apper">
                        Apper
                    </Link>
                    |
                    <Link className={classes.link} to="/integrasjon">
                        Integrasjon
                    </Link>
                </div>
                <div>
                    <p className={classes.contact}>DIBkunnskap AS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
