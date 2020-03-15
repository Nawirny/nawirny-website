import React, { Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "react-translate";

import NavBar from '../components/NavBar';
import ServiceCard from '../components/ServiceCard';

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

  const proServices = [{ title: 'Blockchain', description: 'Blockchain Based Solutions', image: "/static/images/blockchain-logo.jpg" },
                       { title: 'GIS', description: 'Geographical Informations Systems (GIS)', image: "/static/images/gis.png" },
                       { title: 'SDS', description: 'Spatial Data Science', image: "/static/images/gis.png" }];

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
                <Typography variant="h2">{t("What")} </Typography>
                <hr />
                <Typography variant="h5">{t("Subtext")}</Typography>
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

          {proServices.map(service => (                    
                    <ServiceCard service={service}  key={service.title}/>
            ))}

        </Grid>
        |</div>


    </Fragment>
  );
}

export default Home;
