import React from "react";
import {
    makeStyles,
    Card,
    CardContent,
    Typography,
    Grid,
} from "@material-ui/core";
// import { useHistory } from "react-router-dom";

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

const Recipes = ({ item }) => {
    // const history = useHistory();
    const classes = useStyles();
    console.log(item);
    return (
        <Grid item xs={12} className={classes.container}>
            <Card key={item.sys.id} variant="outlined" className={classes.card}>
                <CardContent>
                    <Typography variant="h6">{item.fields.title}</Typography>
                    <img
                        src={item.fields.images.fields.file.url}
                        alt={item.fields.title}
                        className={classes.image}
                    />
                    <Typography variant="h4">Method</Typography>
                    <Typography variant="body1">
                        {item.fields.description}
                    </Typography>

                    <Typography variant="h4">Ingredients</Typography>
                    <Typography variant="body2">
                        {item.fields.ingred.map((ing) => (
                            <li>{ing}</li>
                        ))}
                    </Typography>
                    <Typography variant="h4">Duration</Typography>
                    <Typography variant="body2">
                        {item.fields.cookingTime}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Recipes;
