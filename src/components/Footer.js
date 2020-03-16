import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


import Logo from '../img/logo-enlightme-1.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <Grid container spacing={3} >
                <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                <Link to='/'>
                    <img src={Logo} style={{ maxHeight: '100%', height: '100px' }} alt=""/>
                </Link>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                    <Link to='/about'  color="inherit" >About</Link>
                    <br/>
                    <Link to='/platforms'  color="inherit" >Platforms</Link>
                    <br/>
                    <Link to='/geodatasets'  color="inherit" >DataSets</Link>
                    <br/>
                    <Link to='/usecases'  color="inherit" >Use Cases</Link>
                    <br/>
                    <Link to='/'>Team & Community</Link>
                    <br/>
                    <p>© 2020, Built with ❤ by Team Enlight.me</p>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                    <a href='https://www.github.com/enlight-me'>
                    <IconButton aria-label="Facebook" color="inherit">
                            <GitHubIcon color="action"/>
                        </IconButton>
                    </a>                    
                    <br/>                    
                    <Link to='/'>
                        <IconButton aria-label="Facebook" color="inherit">
                            <FacebookIcon color="action"/>
                        </IconButton>                        
                    </Link>
                    <Link to='/'>
                        <IconButton aria-label="Instagram" color="inherit">
                            <InstagramIcon color="action" />
                        </IconButton>
                    </Link>
                    <Link to='/'>
                    <IconButton aria-label="LinkedIn" color="inherit">
                            <LinkedInIcon color="action"/>
                        </IconButton>
                    </Link>
                    <Link to='/'>
                    <IconButton aria-label="Twitter" color="inherit">
                            <TwitterIcon color="action"/>
                        </IconButton>
                    </Link>
                    <Link to='/'>
                        <IconButton aria-label="Youtube" color="inherit">
                            <YouTubeIcon color="action"/>
                        </IconButton>
                    </Link>                
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
