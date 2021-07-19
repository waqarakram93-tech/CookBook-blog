import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import client from "../utils/contentful";
import Error from "./Error";
import { makeStyles, TextField, Grid } from "@material-ui/core";
import Results from "./Results";

const useStyles = makeStyles({
    container: {
        padding: 10,
        margin: "0 auto",
        textAlign: "center",
        width: "100%",
    },
    root: {
        margin: "60px auto",
    },
    textField: {
        width: "80%",
        margin: "40px auto",
        textAlign: "center",
    },
});

const Home = ({ recipe }) => {
    console.log(recipe);

    const classes = useStyles();
    const [input, setInput] = useState("");
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        client
            .getEntries({ content_type: "recipe" })
            .then((response) => {
                setItem(response.items);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
                setTimeout(() => setError(null), 3000);
            });
    }, []);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

    return (
        <div
            style={{
                backgroundImage: `url("https://i.pinimg.com/736x/49/1a/92/491a924f10d7988a9ab2d3ff4f7121c8.jpg")`,
                opacity: "0.5",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className={classes.container}>
                {loading && <Loading />}
                {error && <Error />}

                <TextField
                    className={classes.textField}
                    variant="outlined"
                    size="medium"
                    align="center"
                    label="Search for your favourite recipe ..."
                    color="primary"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                {item &&
                    item
                        .filter((item) => {
                            if (input === "") {
                                <Loading />;
                            } else {
                                return item;
                            }
                        })
                        .map((item) => (
                            <Grid container spacing={3} clasName={classes.root}>
                                <Results item={item} />
                            </Grid>
                        ))}
            </div>
        </div>
    );
};

export default Home;
