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

export default function CardPLFCryptoSpatialContracts() {
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
              
              title="Smart Contracts"
              subheader="Crypto-Spatial Contracts"
          />
         
          <CardContent>
              <Typography variant="body1" component="p">
              Solidity smart contracts for Geospatially Enabled Decentralized 
              Applications on the Ethereum blockchain.
        </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <a href='https://github.com/enlight-me/crypto-spatial-contracts'>
              <IconButton aria-label="CS">
                  <GithubIcon />
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
                  This project aims to implements geospatial data management features, 
                  on the Blockchain technology, which is an open research subject at the 
                  Open Geospatial Consortium where a Blockchain and Distributed Ledger Technologies 
                  Domain Working Group has been created especially for that.
                 </Typography> 
                 <Typography variant="body2" color="textSecondary" paragraph>
                 The FOAM protocole, developped by FOAM space was implemented using the 
                 White Paper with a set of solidity smart contracts. 
                 Some modifications was implemented to explore the alternatives suggested 
                 by the OGC discussion paper ($7.5)
                 For the Crypto-Spatial Coordinates, a conforming implementation of the 
                 Geodesic Discrete Global Grid Systems OGC standard has been used in place of 
                 Geohash used by the FOAM protocole.
                  </Typography>

              </CardContent>
          </Collapse>
      </Card>
  );
}