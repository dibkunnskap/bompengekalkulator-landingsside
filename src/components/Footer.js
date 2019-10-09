import React from "react";
import {Link} from "gatsby";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(theme => ({
    footer: {
        backgroundColor: theme.palette["neutral-100"],
        padding: theme.spacing["16"],
        color: theme.palette["neutral-600"],
    },
    logo: {
        display: "flex",
        justifyContent: "center"
    },
    list: {
        listStyleType: "none",
    },
    link: {
        color: theme.palette["neutral-600"],
        font: "inherit",
        textDecoration: "none"
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <div className={classes.logo}>
                <h1>Bompengekalkulator</h1>
            </div>
            <div>
                <ul className={classes.list}>
                    <li>
                        <Link className={classes.link} to="/">Hjem</Link>
                    </li>
                    <li>
                        <Link className={classes.link} to="/">About</Link>
                    </li>
                    <li>
                        <Link className={classes.link} to="/">Kontakt</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
