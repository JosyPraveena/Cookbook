import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: "50px"
  },

  btn: {
    padding: "20px 30px",
    maxWidth: "150px",
    fontWeight: "bold",
    transition: "all 0.5s ease",
    marginLeft: "20px",
    marginTop: "10px",
    textAlign: "center",
    "&:hover": {
      transform: "translateY(-3px)",
      background: "rgb(255,255,102)",
      boxShadow: "0px 5px 10px 2px rgba(0,0,0,0.3)"
    },
    "&:active": {
      transform: "translateY(-1px)",
      boxShadow: "0px 5px 5px 2px rgba(0,0,0,0.3)"
    }
  }
});

const Home = ({ categories }) => {
  const list = categories;
  const classes = useStyles();

  return (
    <>
      <h1>
        Keep calm and COOK <br />
        Select a Category you crave for.....
      </h1>
      <Grid
        container
        justify="center"
        style={{ width: "100%" }}
        className={classes.root}
        spacing={1}
      >
        {list.length &&
          list.map(each => (
            <Grid
              container
              item
              xs={5}
              sm={3}
              justify="center"
              key={each.strCategory}
              // flexwrap="wrap"
              // justifycontent="center"
            >
              <Button
                className={classes.btn}
                variant="contained"
                key={each.strCategory}
                component={Link}
                to={`/${each.strCategory}`}
              >
                {each.strCategory} Recipes
              </Button>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Home;
