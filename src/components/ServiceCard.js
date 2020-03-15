import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 140,
    },
  });

const ServiceCard = (props) => {
    const classes = useStyles();
    return (
        <Grid
            item
            xs={12}
            md={4}
            style={{ textAlign: "center", padding: "2rem" }}
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
                    <Button size="small" color="primary">
                        More details
                        </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ServiceCard;