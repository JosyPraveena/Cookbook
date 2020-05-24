import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      color: "white"
    },
    gridList: {
      width: "100%",
      height: 900
    },
    title: {
      fontSize: "2rem"
    },
    margin: {
      margin: theme.spacing(1)
    }
  })
);
const Recipe = () => {
  let { category } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  let itemList = [];
  useEffect(() => {
    async function fetchList() {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
        .then(res => setRecipes(res.meals));
    }
    fetchList();
  }, [category]);
  const handleClick = e => {
    history.push("/");
  };

  if (recipes) {
    itemList = recipes.map(each => {
      return (
        <GridListTile
          key={each.idMeal}
          component={Link}
          to={`/${category}/${each.idMeal}`}
        >
          <img src={each.strMealThumb} alt="recipeimage" />
          <GridListTileBar title={each.strMeal} className={classes.title} />
        </GridListTile>
      );
    });
  }

  return (
    <>
      <div className="header">
        {/* <button>Back</button> */}
        <Button onClick={handleClick} variant="outlined">
          Back
        </Button>
      </div>
      <div className={classes.root}>
        <h2> Flavourful {category} Recipes </h2>{" "}
        <GridList cellHeight={400} className={classes.gridList} spacing={4}>
          {itemList}
          <GridListTile key="Subheader" cols={3} style={{ height: "800" }} />
        </GridList>
      </div>
    </>
  );
};
export default Recipe;
