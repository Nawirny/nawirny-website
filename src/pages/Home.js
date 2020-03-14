import React, { Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "react-translate";

import NavBar from '../components/NavBar';
import ServicesList from '../components/ServicesList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Home = ({ languageMode, handleLanguageToggle }) => {
  let t = useTranslate(languageMode ? "english" : "arabic");
  const classes = useStyles();

  return (
    <Fragment>
      <div className="landingContainer">
        <NavBar
          languageMode={languageMode}
          handleLanguageToggle={handleLanguageToggle}
        />
        <div className={classes.root}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6} alignItems="center">
              <div className="opening-blurb">
                <Typography variant="h2">{t("What")} </Typography>
                <hr />
                <Typography variant="h5">{t("Subtext")}</Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="blurb">
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={12}
              style={{ textAlign: "center", padding: "5rem" }}
            >
              <Typography variant="h3" style={{ color: "white" }}> {t("citation80pp")} </Typography>
            </Grid>
          </Grid>
        </div>

        <div className="howitworks">
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={12}
              style={{ textAlign: "center", padding: "2rem" }}
            >
              <Typography variant="h2">{t("services")} </Typography>
            </Grid>

            <ServicesList />
          </Grid>
        |</div>

      </div>
    </Fragment>
  );
}

export default Home;
