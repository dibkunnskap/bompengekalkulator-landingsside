import React from "react";
import {Link} from "gatsby";
import {createUseStyles} from "react-jss";
import Button from "./Button";

const useStyles = createUseStyles(theme => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        /* position: "absolute" */
    },
    nav: {
        width: "75%",
        maxWidth: "1080px",
        margin: "0 auto",
        height: theme.spacing["96"],
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    header: {
        fontFamily: "Caveat Brush",
        fontSize: "30px",
        color: theme.palette["primary-500"],
        textDecoration: "none"
    },
    navMenu: {
        display: "flex",
        alignItems: "center"
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
        fontWeight: "700"
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
                <Link className={classes.header} to="/">
                    Bompengekalkulator.no
                </Link>
                <div className={classes.navMenu}>
                    <Link
                        className={`${classes.navItem} ${classes.navItemActive}`}
                        to="/"
                    >
                        Om
                    </Link>
                    <Link className={classes.navItem} to="/blogg">
                        Blogg
                    </Link>
                    <Link className={classes.navItem} to="/apper">
                        Apper
                    </Link>
                    <Link className={classes.navItem} to="/integrasjon">
                        API
                    </Link>
                    <a href="http://bompengekalkulator.no">
                        <Button className={classes.navButton}>
                            Beregn bompenger
                        </Button>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
