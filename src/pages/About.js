import React, { Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "react-translate";

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import ImageVision from '../img/vision-process.png'

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

const About = ({ languageMode, handleLanguageToggle }) => {
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
            <Grid item xs={12} md={6}>
              <div className="opening-blurb">
                <Typography variant="h4">Enlight.me </Typography>
                <hr />
                <Typography variant="h6" style={{ textAlign: 'center' }} paragraph>{t("enlightmeAbout")}</Typography>
                <Typography variant="h6" style={{ textAlign: 'center' }} paragraph>{t("ecosystemdescription")}</Typography>
                <Typography variant="h6" style={{ textAlign: 'center' }} paragraph>{t("enlightmeValues")}</Typography>
              </div>
            </Grid>
            <Grid item xs={12}  md={6}>
                <img src={ImageVision} style={{ maxHeight: '80vh', width: '90%' }} alt="" /> 
              </Grid>
          </Grid>
        </div>
      </div>

      <div className="blurb">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} style={{ textAlign: "center", padding: "1rem" }} >
            <Typography variant="h3" style={{ color: "white" }}> {t("businessmodel")} </Typography>
          </Grid>
        </Grid>
      </div>

      <div className={classes.root}>
          <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
              <div className="facts">
                <Typography variant="h6" style={{ textAlign: 'center' }} paragraph>{t("bmdescription1")}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="facts">
                <Typography variant="h6" style={{ textAlign: 'center' }} paragraph>{t("bmdescription2")}</Typography>
              </div>
            </Grid>
          </Grid>
        </div>

      <div className="blurb">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} style={{ textAlign: "center", padding: "1rem" }} >
            <Typography variant="h3" style={{ color: "white" }}> {t("contactus")} </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="howitworks">
        <Grid container spacing={3}>
        <Grid item xs={12} md={4} style={{ textAlign: "center", padding: "2rem" }} >
            <Paper elevation={3}>
              <IconButton aria-label="Mail" color="inherit">                    
                        <MailIcon />
              </IconButton>
              <Typography>info@enlightme.biz</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: "center", padding: "2rem" }} >
            <Paper elevation={3}>
              <IconButton aria-label="Phone" color="inherit">                    
                        <PhoneIcon />
              </IconButton> 
              <Typography>+213 552 59 21</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: "center", padding: "2rem" }} >
            <Paper elevation={3}>
            <IconButton aria-label="Address" color="inherit">                    
                        <BusinessIcon />
              </IconButton> 
              <Typography>Cité 410 Logements CNEP, Ain Temouchent</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <div className="blurb">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} style={{ textAlign: "center", padding: "1rem" }} >
            <Typography variant="h3" style={{ color: "white" }}> {t("partners")} </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="howitworks">
        <Grid container spacing={3}>
        <Grid item xs={12} md={4} style={{ textAlign: "center", padding: "2rem" }} >
            <Paper elevation={3}>
              <Typography>Consultants & Trainers</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: "center", padding: "2rem" }} >
            <Paper elevation={3}>
              <Typography>Developers & UX/UI Designers</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: "center", padding: "2rem" }} >
            <Paper elevation={3}>
              <Typography>DevSecOps Professionals & Cloud Services Providers</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>

      <Footer />

    </Fragment>
  );
}

export default About;
