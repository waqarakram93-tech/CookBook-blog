import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";

const useStyles = makeStyles({
    navBar: {
        marginBottom: 100,
    },
    toolbar: {
        "& > *": {
            color: "#fff",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    icons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > *": {
            color: "#fff",
            padding: "0 20px",
            textDecoration: "none",
        },
    },
});

const Nav = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar
                position="static"
                variant="outlined"
                color="primary"
                className={classes.navBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Link to="/">
                        <img
                            src={
                                "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png"
                            }
                            alt="Logo"
                            width="36px"
                            style={{ color: "#fff" }}
                        />
                    </Link>
                    <div className={classes.icons}>
                        <Link to="/categories">
                            <RestaurantMenuIcon />
                            <Typography>Categories</Typography>
                        </Link>
                        <Link to="/recipes">
                            <MenuBookIcon />
                            <Typography>Recipes</Typography>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;
