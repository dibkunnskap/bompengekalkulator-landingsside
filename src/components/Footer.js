import React from "react";
import {Link} from "gatsby";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(theme => ({
    footer: {
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        backgroundColor: theme.palette["neutral-050"],
        padding: theme.spacing["16"],
        color: theme.palette["neutral-600"],
    },
    logo: {
        display: "flex",
        justifyContent: "center"
    },
    list: {
        listStyleType: "none",
        margin: `${theme.spacing["16"]} 0`,
        width: "720px"
    },
    link: {
        color: theme.palette["neutral-600"],
        font: "inherit",
        textDecoration: "none"
    },
    contact: {
        color: theme.palette["neutral-400"],
        fontSize: theme.fontSize["16"]
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <ul className={classes.list}>
                <li>
                    <Link className={classes.link} to="/">
                        Hjem
                    </Link>
                </li>
                <li>
                    <Link className={classes.link} to="/">
                        About
                    </Link>
                </li>
                <li>
                    <Link className={classes.link} to="/">
                        Kontakt
                    </Link>
                </li>
            </ul>
            <p className={classes.contact}>DIBkunnskap AS | Strandveien 50, Lysaker | 95 40 70 70 | post@dib.no</p>
        </footer>
    );
};

export default Footer;
