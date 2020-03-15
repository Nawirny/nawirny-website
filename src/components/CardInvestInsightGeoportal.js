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
import GithubIcon from '@material-ui/icons/GitHub';
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

export default function InvestInsightGeoportal() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Card className={classes.root}>
          <CardHeader
              avatar={
                  <Avatar aria-label="web" className={classes.avatar}>
                      W
                  </Avatar>
              }              
              title="Web"
              subheader="InvestInsight Geoportal"
          />
         
          <CardContent>
              <Typography variant="body1" component="p">
                  InvestInsight Geoportal is a web application built upon terriaMap.
              </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <a href='https://github.com/enlight-me'>
              <IconButton aria-label="DeLA">
                  <GithubIcon />
              </IconButton>
              </a>              
              <IconButton aria-label="demo">
                  <WebIcon />
              </IconButton>             
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
                      The main objective of this geoportal is to simplify the access to 
                      useful insights for investors all around the world.
                 </Typography> 
                 <Typography variant="body2" color="textSecondary" paragraph>
                      The webmapping application is not yet live on github pages. 
                  </Typography>
              </CardContent>
          </Collapse>
      </Card>
  );
}