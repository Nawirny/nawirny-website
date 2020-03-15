import React, { Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "react-translate";

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import CardDeLA from '../components/CardDeLA.js';
import CardnvestInsightMobile from '../components/CardnvestInsightMobile.js';
import InvestInsightGeoportal from '../components/CardInvestInsightGeoportal.js';
import Geomarketing from '../components/CardGeomarketing.js';

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

const Platforms = ({ languageMode, handleLanguageToggle }) => {
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
                <Typography variant="h4">{t('openLIplatforms')}</Typography>
                <hr />
                <Typography variant='body1'>
                  Enlight.me solutions are : <br />
                  - distributed under permissive open source licences (Apache 2.0), <br />
                  - made available to the community free of charge, <br />
                  - open to community contributions, <br />
                  - customizable by Enlight.me team to meet customer needs (subject to conditions).
                </Typography>
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
            <Typography variant="h3" style={{ color: "white" }}> {t("platforms")} </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="howitworks">
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={3}
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <CardDeLA/>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <CardnvestInsightMobile/>            
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <InvestInsightGeoportal/>            
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            style={{ textAlign: "center", padding: "2rem" }}
          >
            <Geomarketing/>            
          </Grid>
        </Grid>
      </div>

      <Footer />

    </Fragment>
  );
}

export default Platforms;
