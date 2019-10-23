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
            "@media (max-width: 720px)": {
                flex: "1",
                textAlign: "center"
            }
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
            margin: theme.spacing["16"],
            font: "inherit",
            textDecoration: "none"
        }
    },
    logo: {
        fontFamily: "Caveat Brush !important",
        fontSize: "24px",
        color: theme.palette["neutral-400"],
        textDecoration: "none"
    },
    button: {
        appearance: "none",
        border: "none",
        backgroundColor: "transparent",
        color: theme.palette["neutral-500"],
        fontSize: theme.fontSize["16"],
        "&:focus": {
            outline: "none"
        },
        "&:hover": {
            cursor: "pointer"
        }
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
                        className={classes.logo}
                        href="https://bompengekalkulator.no"
                    >
                        bompengekalkulator.no
                    </a>
                </div>
                <div className={classes.links}>
                    <Link to="/">Om</Link>
                    |
                    <Link to="/blogg">Blogg</Link>
                    |
                    <Link to="/apper">Apper</Link>
                    |
                    <Link to="/integrasjon">Integrasjon</Link>
                </div>
                <div>
                    <p className={classes.contact}>DIBkunnskap AS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
