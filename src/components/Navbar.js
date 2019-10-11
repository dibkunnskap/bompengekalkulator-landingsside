import React, {useState} from "react";
import {Link} from "gatsby";
import {createUseStyles} from "react-jss";
import Button from "./Button";
import menuIcon from "../img/menu.svg";

const useStyles = createUseStyles(theme => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    nav: {
        width: "100%",
        maxWidth: "1080px",
        margin: "0 auto",
        display: "flex",
        flexFlow: "column",
        position: "relative",
        "@media (min-width: 900px)": {
            width: "90%"
        }
    },
    navTopRow: {
        height: theme.spacing["96"],
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    header: {
        fontFamily: "Caveat Brush",
        fontSize: theme.fontSize["32"],
        color: theme.palette["primary-500"],
        textDecoration: "none",
        "@media (max-width: 900px)": {
            paddingLeft: theme.spacing["48"]
        }
    },
    navMenu: {
        display: "flex",
        alignItems: "center",
        "@media (max-width: 900px)": {
            display: "none"
        }
    },
    navItem: {
        margin: `0 ${theme.spacing["16"]}`,
        textDecoration: "none",
        color: theme.palette["primary-500"],
        fontWeight: "700"
    },
    navItemActive: {
        borderBottom: "2px solid",
        borderBottomColor: theme.palette["primary-500"]
    },
    navButton: {
        border: "1px solid",
        borderColor: theme.palette["primary-500"],
        color: theme.palette["primary-500"],
        marginLeft: theme.spacing["32"],
        backgroundColor: "white",
        fontWeight: "600",
        whiteSpace: "nowrap"
    },
    hamburgerButton: {
        appearance: "none",
        border: "none",
        backgroundColor: "white",
        margin: "0",
        height: theme.spacing["96"],
        width: theme.spacing["96"],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& img": {
            margin: "0",
            color: "blue",
            fill: "currentColor"
        },
        "&:focus": {
            outline: "none"
        },
        "@media (min-width: 900px)": {
            display: "none"
        }
    },
    hamburger: {
        display: "flex",
        flexFlow: "column",
        marginBottom: theme.spacing["16"],
        "& div": {
            display: "flex",
            justifyContent: "center",
            padding: theme.spacing["8"],
            "&:hover": {
                backgroundColor: theme.palette["neutral-050"]
            }
        },
        "@media (min-width: 900px)": {
            display: "none"
        }
    }
}));

const Navbar = ({path}) => {
    const [hamburgerOpen, setHambugerOpen] = useState(false);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <nav
                className={classes.nav}
                role="navigation"
                aria-label="main-navigation"
            >
                <div className={classes.navTopRow}>
                    <Link className={classes.header} to="/">
                        Bompengekalkulator.no
                    </Link>
                    <div className={classes.navMenu}>
                        <Link
                            className={`${classes.navItem} ${path === "/" &&
                                classes.navItemActive}`}
                            to="/"
                        >
                            Om
                        </Link>
                        <Link
                            className={`${classes.navItem} ${path.includes(
                                "/blogg"
                            ) && classes.navItemActive}`}
                            to="/blogg"
                        >
                            Blogg
                        </Link>
                        <Link
                            className={`${classes.navItem} ${path ===
                                "/apper/" && classes.navItemActive}`}
                            to="/apper"
                        >
                            Apper
                        </Link>
                        <Link
                            className={`${classes.navItem} ${path ===
                                "/integrasjon/" && classes.navItemActive}`}
                            to="/integrasjon"
                        >
                            Integrasjon
                        </Link>
                        <a href="http://bompengekalkulator.no">
                            <Button className={classes.navButton}>
                                Beregn bompenger
                            </Button>
                        </a>
                    </div>
                    <button
                        className={classes.hamburgerButton}
                        type="button"
                        onClick={() => setHambugerOpen(!hamburgerOpen)}
                    >
                        <img src={menuIcon} alt="menu" width="32px" />
                    </button>
                </div>
                {hamburgerOpen && (
                    <div className={classes.hamburger}>
                        <Link className={classes.navItem} to="/">
                            <div>Om</div>
                        </Link>
                        <Link className={classes.navItem} to="/blogg">
                            <div>Blogg</div>
                        </Link>
                        <Link className={classes.navItem} to="/apper">
                            <div>Apper</div>
                        </Link>
                        <Link className={classes.navItem} to="/integrasjon">
                            <div>Integrasjon</div>
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
