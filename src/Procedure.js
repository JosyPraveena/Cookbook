import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Avatar from "@material-ui/core/Avatar";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 800,
      marginTop: "1vh"
    },

    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
  })
);

const Procedure = () => {
  const { id, category } = useParams();

  const history = useHistory();
  const [process, setProcess] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(() => {
    async function fetchList() {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(res => setProcess(res.meals));
    }
    fetchList();
  }, [id]);
  useEffect(() => {
    if (process) {
      const filteredRecipe = process.filter(each => each.idMeal === id);

      if (filteredRecipe[0]) {
        setItem(filteredRecipe);
      }
    }
  }, [id, process]);

  const handleClick = e => {
    history.push(`/${category}`);
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="header">
        {/* <button>Back</button> */}
        <Button onClick={handleClick} variant="outlined">
          Back
        </Button>
      </div>
      <Grid container justify="center" className={classes.section}>
        <Grid item>
          <Card
            className={classes.root}
            direction="column"
            style={{ marginBottom: "100px" }}
          >
            {item.length &&
              item.map(each => {
                return (
                  <Card className={classes.root} key={each.idMeal}>
                    <CardHeader title={each.strMeal} />
                    <CardMedia
                      className={classes.media}
                      image={each.strMealThumb}
                      title={`${each.strArea} dish`}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="p"
                      >
                        {`This impressive ${each.strArea} dish is a perfect fun
                        meal to cook and extremely delicious.`}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>

                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        Recipe here
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography variant="h4"> Ingredients: </Typography>
                        <br />
                        <Typography paragraph>
                          {each.strIngredient1 && each.strMeasure1
                            ? `${each.strIngredient1} ~ ${each.strMeasure1}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient2 && each.strMeasure2
                            ? `${each.strIngredient2} ~ ${each.strMeasure2}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient3 && each.strMeasure3
                            ? `${each.strIngredient3} ~ ${each.strMeasure3}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient4 && each.strMeasure4
                            ? `${each.strIngredient4} ~ ${each.strMeasure4}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient5 && each.strMeasure5
                            ? `${each.strIngredient5} ~ ${each.strMeasure5}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient6 && each.strMeasure6
                            ? `${each.strIngredient6} ~ ${each.strMeasure6}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient7 && each.strMeasure7
                            ? `${each.strIngredient7} ~ ${each.strMeasure7}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient8 && each.strMeasure8
                            ? `${each.strIngredient8} ~ ${each.strMeasure8}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient9 && each.strMeasure9
                            ? `${each.strIngredient9} ~ ${each.strMeasure9}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient10 && each.strMeasure10
                            ? `${each.strIngredient10} ~ ${each.strMeasure10}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient11 && each.strMeasure11
                            ? `${each.strIngredient11} ~ ${each.strMeasure11}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient12 && each.strMeasure12
                            ? `${each.strIngredient12} ~ ${each.strMeasure12}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient13 && each.strMeasure13
                            ? `${each.strIngredient13} ~ ${each.strMeasure13}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient14 && each.strMeasure14
                            ? `${each.strIngredient14} ~ ${each.strMeasure14}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient15 && each.strMeasure15
                            ? `${each.strIngredient15} ~ ${each.strMeasure15}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient16 && each.strMeasure16
                            ? `${each.strIngredient16} ~ ${each.strMeasure16}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient17 && each.strMeasure17
                            ? `${each.strIngredient17} ~ ${each.strMeasure17}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient18 && each.strMeasure18
                            ? `${each.strIngredient18} ~ ${each.strMeasure18}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient19 && each.strMeasure19
                            ? `${each.strIngredient19} ~ ${each.strMeasure19}`
                            : null}
                        </Typography>
                        <Typography paragraph>
                          {each.strIngredient20 && each.strMeasure20
                            ? `${each.strIngredient20} ~ ${each.strMeasure20}`
                            : null}
                        </Typography>{" "}
                        <br />
                        <Typography variant="h4"> Procedure </Typography>
                        <br />
                        <Typography paragraph>
                          {each.strInstructions}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                );
              })}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Procedure;
