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
        alignItems: "center",
        width: "720px"
    },
    links: {
        display: "flex",
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
        margin: "0"
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <div className={classes.content}>
                <a
                    className={`${classes.link} ${classes.logo}`}
                    href="https://bompengekalkulator.no"
                >
                    bompengekalkulator.no
                </a>
                <div className={classes.links}>
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
                <p className={classes.contact}>DIBkunnskap AS</p>
            </div>
        </footer>
    );
};

export default Footer;
