import React, { Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "react-translate";

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import CardOpenStreeMap from '../components/CardOpenStreeMap.js';

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

const GeoDataSets = ({ languageMode, handleLanguageToggle }) => {
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
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <div className="opening-blurb">
                <Typography variant="h4">{t('freeGeoDatasets')}</Typography>
                <hr />
                <Typography variant='body1'>
                  Enlight.me ambition to simplify the access to the large amount of freely available global and local datatsets by : <br /><br />
                  - contributing and eductating the public to contribute to the most impactful initiatives like OpenStreetMap, <br />
                  - designing tutorials to help professionnals and academics understand and use efficiently any dataset freely available online, <br />
                  - building wrappers to enrich the available datasets with location component, <br />
                  - using and deploying aggregators for free Big Data sources.
                </Typography>
                <br/>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>


      <div className="blurb">
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={12}
            style={{ textAlign: "center", padding: "1rem" }}
          >
            <Typography variant="h3" style={{ color: "white" }}> {t("geodatasets")} </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="howitworks">
        <Grid container spacing={3}>
        <Grid item  xs={12}  md={6} style={{ textAlign: "center", padding: "2rem" }}>
            <CardOpenStreeMap />
          </Grid>

        </Grid>
      </div>

      <Footer />

    </Fragment>
  );
}

export default GeoDataSets;
