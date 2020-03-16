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

export default function CardDeLA() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Card className={classes.root}>
          <CardHeader
              avatar={
                  <Avatar aria-label="blockchain" className={classes.avatar}>
                      B
          </Avatar>
              }
              
              title="Blockchain"
              subheader="Decentralized Land Administration"
          />
         
          <CardContent>
              <Typography variant="body1" component="p">
                  DeLA  (Decentralized Land Administration) is a Blockchain enabled Geopspatial 
                  platform which main objective is porting this land registry
                  solution to the Etherum blockchain is the ability to use it as a crowd sourcing 
                  land registry  platform to collect tenure relationships and as a tool for
                  communities to assess and clarify their tenure regimes so to protect the individual 
                  and collective rights of their members.
        </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <a href='https://github.com/allilou/onchain-land-administration'>
              <IconButton aria-label="DeLA">
                  <GithubIcon />
              </IconButton>
              </a>
              <a href='https://allilou.github.io/onchain-land-administration/'>
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
                      The main objective of this platform is to implement,
                      on the Ethereum blockchain, all the features of the the open source SOLA-FAO
                      (Solutions for Open Land Administration) which is a J2EE implementation that has many
                      uses cases in Africa and Asia. Using SOLA allows us to incorporate international
                      best practice and standards, namely the ISO 19152:2012 standard - Geographic information
                      — Land Administration Domain Model (LADM))
                 </Typography> 
                 <Typography variant="body2" color="textSecondary" paragraph>
                      The source code of this GeodApp is available on and a working version, deployed on the
                      Rinkeby testnet, is live on.
                  </Typography>

              </CardContent>
          </Collapse>
      </Card>
  );
}