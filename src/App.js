import React, { useEffect, useState } from "react";
import client from "./utils/contentful";
import Recipes from "./components/Recipes";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Home from "./components/Home";
import Categories from "./components/Categories";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        client
            .getEntries({ content_type: "recipe" })
            .then((response) => {
                setItems(response.items);
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
        <div>
            <Switch>
                <Route exact path="/">
                    <Nav />
                    <Home />
                    <Footer />
                </Route>
                <Route exact path="/recipes">
                    <Nav />
                    {items.map((item) => (
                        <Recipes item={item} key={item.sys.id} />
                    ))}
                    <Footer />
                </Route>

                <Route exact path="/categories">
                    <Nav />
                    <Categories />
                    <Footer />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
