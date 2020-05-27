import React, { Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "react-translate";

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import CardPLFDeLA from '../components/CardPLFDeLA.js';
import CardPLFInvestInsightMobile from '../components/CardPLFInvestInsightMobile.js';
import CardPLFInvestInsightGeoportal from '../components/CardPLFInvestInsightGeoportal.js';
import CardPLFCryptoSpatialContracts from '../components/CardPLFCryptoSpatialContracts.js';

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
                  Enlight.me solutions are : <br /><br />
                  - distributed under permissive open source licences (Apache 2.0), <br />
                  - made available to the community free of charge, <br />
                  - open to community contributions, <br />
                  - customizable by Enlight.me team to meet customer needs (subject to conditions).
                </Typography>
                <br />
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
        <Grid container spacing={1}>

          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center", padding: "1rem" }}>
            <CardPLFCryptoSpatialContracts />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center", padding: "1rem" }}>
            <CardPLFDeLA />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center", padding: "1rem" }}>
            <CardPLFInvestInsightMobile />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center", padding: "1rem" }}>
            <CardPLFInvestInsightGeoportal />
          </Grid>

        </Grid>
      </div>

      <Footer />

    </Fragment>
  );
}

export default Platforms;
