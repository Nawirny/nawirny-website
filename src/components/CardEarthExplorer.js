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
    maxWidth: 345,
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

export default function CardEarthExplorer() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="geodata" className={classes.avatar}>
            W
          </Avatar>
        }

        title="GeoData"
        subheader="Earth Explorer"
      />

      <CardContent>
        <Typography variant="body1" component="p">
        EarthExplorer (EE) (http://earthexplorer.usgs.gov) provides online search, browse display, metadata export, 
        and data download for earth science data from the archives of the U.S. Geological Survey (USGS). 
        EE provides an enhanced user interface using state-of-the-art technologies for searching, viewing, 
        and downloading data.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <a href='https://earthexplorer.usgs.gov/'>
          <IconButton aria-label="DeLA">
            <WebIcon />
          </IconButton>
        </a>
        <a href='https://earthexplorer.usgs.gov/'>
          <IconButton aria-label="demo">
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
            OpenStreetMap emphasizes local knowledge. Contributors use aerial imagery, GPS devices,
            and low-tech field maps to verify that OSM is accurate and up to date.
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            OpenStreetMap's community is diverse, passionate, and growing every day. Our contributors
            include enthusiast mappers, GIS professionals, engineers running the OSM servers,
             humanitarians mapping disaster-affected areas, and many more.
             To learn more about the community, see the OpenStreetMap Blog, user diaries,
             community blogs, and the OSM Foundation website.
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            OpenStreetMap is open data: you are free to use it for any purpose as long as you
             credit OpenStreetMap and its contributors. If you alter or build upon the data in certain
             ways, you may distribute the result only under the same licence.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}