import React, { Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "react-translate";

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
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

const UseCases = ({ languageMode, handleLanguageToggle }) => {
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
                <Typography variant="h4">{t('businessUseCases')}</Typography>
                <hr />
                <Typography variant='body1'>
                  Enlight.me Use Cases envision to  : <br /><br />
                  - capture growing demand of Small Businesses to lower costs by outsourcing their R&D projects, <br />
                  - grow a communitary ecosystem facilitating incubation and acceleration of startups solving real business problems, <br />
                  - offer a high quality Consulting on organisation's Lean Transformation, <br />
                  - democratize Deep Tech adoption by businesses (Blockchain, Spatial Data Science, Artificial Intelligence, 
                </Typography>
                <hr />
                <Typography variant='body1'>
                  To leverage community engagement Enlight.me : <br /><br />
                  - encourage developpers and any interested person or organisation to contribute to its open platforms and to post new issues (Idea Box), <br />
                  - organise regular competitions to motivate peoples and organisations building Location Intelligence solutions, <br />
                  - host free events to educate the public on  new technologies and rise awareness on locations intelligence applications.  . 
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
            <Typography variant="h3" style={{ color: "white" }}> {t("usecases")} </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="howitworks">
        <Grid container spacing={3}>

          <Grid item  xs={12}  md={3} style={{ textAlign: "center", padding: "2rem" }}>
            <Geomarketing/>            
          </Grid>

        </Grid>
      </div>

      <Footer />

    </Fragment>
  );
}

export default UseCases;
