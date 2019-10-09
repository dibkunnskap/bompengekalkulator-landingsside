import React from "react";
import {Link} from "gatsby";
import {createUseStyles} from "react-jss";
import Button from "./Button";
import logo from "../img/kontohjelp-logo.png";

const useStyles = createUseStyles(theme => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "absolute"
    },
    nav: {
        width: "75%",
        maxWidth: "1080px",
        margin: "0 auto",
        height: theme.spacing["96"],
        /* padding: "1rem 3rem", */
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
        position: "absolute"
    },
    title: {
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        textDecoration: "none",
        color: "#00223f"
    },
    navMenu: {
        /* flex: "0 0 75%", */
        display: "flex",
        alignItems: "center"
        /* position: "relative", */
        /* left: "50%" */
    },
    navItem: {
        margin: `0 ${theme.spacing["16"]}`,
        textDecoration: "none",
        color: theme.palette["neutral-700"],
        fontWeight: "700",
        borderBottom: "2px solid",
        borderBottomColor: theme.palette["neutral-500"]
    },
    login: {
        display: "flex",
        justifyContent: "flex-end",
        "&:hover": {
            textDecoration: "underline"
        }
    },
    logo: {
        margin: "0",
        width: theme.spacing["64"]
    },
    loginButton: {
        /* width: theme.spacing["96"], */
        border: "2px solid",
        borderRadius: "24px",
        /* padding: "0", */
        marginLeft: theme.spacing["16"],
        backgroundColor: "transparent"
    }
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <nav
                className={classes.nav}
                role="navigation"
                aria-label="main-navigation"
            >
                <Link to="/">
                    <img className={classes.logo} src={logo} alt="logo" />
                </Link>
                <div className={classes.navMenu}>
                    <Link className={classes.navItem} to="/about">
                        Om oss
                    </Link>
                    <Link className={classes.navItem} to="/contact">
                        Kontakt
                    </Link>
                    <Button className={classes.loginButton}>Beregn Bompenger</Button>
                    {/* <div className={classes.login}>
                        <a
                            className={classes.navItem}
                            href="https://localhost:3000/logg-inn"
                        >
                            Logg inn
                        </a>
                    </div> */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
