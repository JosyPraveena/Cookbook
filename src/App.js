import React, { useState, useEffect } from "react";
import "./styles.css";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import Recipe from "./Recipe";
import Procedure from "./Procedure";

export default function App() {
  const [categories, setCategories] = useState({});
  // const { category } = useParams();

  useEffect(() => {
    async function fetchData() {
      const queryUrl =
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
      const data = await fetch(queryUrl);
      const res = await data.json();

      setCategories(res.meals);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route
          path="/:category/:id"
          render={props => <Procedure {...props} />}
        />
        <Route path="/:category" render={props => <Recipe {...props} />} />
        <Route
          path="/"
          render={props => <Home categories={categories} {...props} />}
        />
      </Switch>
    </div>
  );
}
