import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "react-translate";

import NavBar from '../components/NavBar.js';
import ServiceCard from '../components/ServiceCard.js';
import Footer from '../components/Footer.js';

import ImageProcess from '../img/enlightme-process.png';
import openPlatformsImage from '../img/li-platforms.png';
import openGeoDataImage from '../img/geodatasets.jpg';
import openUseCasesImage from '../img/geo-use-cases.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: "center"
  }
}));

const Home = ({ languageMode, handleLanguageToggle }) => {
  let t = useTranslate(languageMode ? "english" : "arabic");
  const classes = useStyles();

  const proServices = [
  { title: 'Open Platforms', description: t('openLIplatforms'),  image: openPlatformsImage, link:'/platforms'},
  { title: 'Open Datasets',  description: t('freeGeoDatasets'),  image: openGeoDataImage  , link:'/geodatasets'},
  { title: 'Open Use Cases', description: t('businessUseCases'), image: openUseCasesImage , link:'/usecases'}];

  return (
    <Fragment>
      <div className="landingContainer">
        <NavBar
          languageMode={languageMode}
          handleLanguageToggle={handleLanguageToggle}
        />
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className="opening-blurb">
                <Typography variant="h3">{t("What")} </Typography>                
                <Link to='/about'>
                  <Button color="inherit" variant="contained">{t("learnmore")}</Button>
                </Link>
                <hr />
                <Typography variant="h5">{t("Subtext")}</Typography>
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
            style={{ textAlign: "center", padding: "5rem" }}
          >
            <Typography variant="h3" style={{ color: "white" }}> {t("citation80pp")} </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="description">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={12} style={{ textAlign: "center", padding: "2rem" }}>
            <Typography variant="h3">{t("ecosystem")} </Typography>
          </Grid>
          <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6} style={{textAlign: 'center', padding: "1rem" }}>
                <Typography variant="h5" paragraph>
                  {t("ecosystemdescription")}
                </Typography>
              </Grid>
              <Grid item xs={12}  md={6}>
                <img src={ImageProcess} style={{ maxHeight: '40vh', width: '100%' }} alt="" /> 
              </Grid>
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
            <Typography variant="h3" style={{ color: "white" }}> {t("openvalues")} </Typography>
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
            <Typography variant="h3">{t("services")} </Typography>
          </Grid>

          {proServices.map(service => (
            <ServiceCard service={service} key={service.title} languageMode={languageMode}/>
          ))}

        </Grid>
      </div>

      <Footer />

    </Fragment>
  );
}

export default Home;
