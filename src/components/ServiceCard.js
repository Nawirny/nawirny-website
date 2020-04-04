import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslate } from "react-translate";

const useStyles = makeStyles({
    root: {
        maxWidth: 760,
    },
    media: {
        height: 140,        
        paddingTop: '15%', // 16:9,
    },
});

const ServiceCard = (props) => {
    const classes = useStyles();
    let t = useTranslate(props.languageMode ? "english" : "arabic");

    return (
        <Grid item xs={12} sm={6} md={4} lg={4}
            style={{ textAlign: "center", padding: "1rem" }}
        >
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.service.image}
                    title={props.service.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="caption" component="h1">
                        {props.service.title}
                    </Typography>
                    <Typography component="p">
                        {props.service.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={props.service.link}>
                        <Button size="small" color="primary"> {t('learnmore')} </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ServiceCard;