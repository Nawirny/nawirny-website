import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 760,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardDSGeoserver() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="webmapping" className={classes.avatar}>
            W
          </Avatar>
        }

        title="Webmapping"
        subheader="Geoserver"
      />

      <CardContent>
        <Typography variant="body1" component="p">
          GeoServer is an open source server for sharing geospatial data. 
          Enlight.me use its main webmapping application and publish on it many ready to use datasets.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <a href='https://datasets.enlightme.biz/geoserver'>
          <IconButton aria-label="Enlight.me Datasets">
            <WebIcon />
            </IconButton>
        </a>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" paragraph>
              Enlight.me use Geoserver as its main webmapping application and publish on it 
              many ready to use datasets.
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
                You can find on the webmapping server many ready to use geospatial services 
                published on different APIs (OGC WMS/WFS, ESRI REST API, ...)
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}