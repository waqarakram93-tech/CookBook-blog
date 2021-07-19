import { useState, useEffect } from "react";
import client from "../utils/contentful";
import React from "react";
import {
    makeStyles,
    Card,
    CardContent,
    Button,
    Typography,
    Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: 60,
    },
    image: {
        width: "100%",
    },
    card: {
        width: "300px",
    },
});

const Results = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        client
            .getEntries({ content_type: "recipe" })
            .then((response) => {
                setItems(response.items);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const history = useHistory();
    const classes = useStyles();
    console.log(items);
    return (
        <Grid item xs={12} className={classes.container}>
            {items &&
                items.map((item) => (
                    <Card
                        key={item.sys.id}
                        variant="outlined"
                        className={classes.card}
                    >
                        <CardContent>
                            <Typography variant="h6">
                                {item.fields.title}
                            </Typography>

                            <img
                                src={item.fields.images.fields.file.url}
                                alt={item.fields.title}
                                className={classes.image}
                            />

                            <Typography variant="h6">
                                You can cook this in...
                            </Typography>

                            <Typography variant="body1">
                                {item.fields.cookingTime}
                            </Typography>

                            <Typography variant="h6">minutes!</Typography>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => history.push(`/recipes`)}
                            >
                                Cook
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            ;
        </Grid>
    );
};

export default Results;
