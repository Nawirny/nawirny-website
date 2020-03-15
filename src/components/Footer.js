import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


import Logo from '../img/logo-enlightme-1.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <Grid container spacing={3} >
                <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                    <img src={Logo} style={{ maxHeight: '100%', height: '100px' }} alt=""/>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                    <Link to='/'  color="inherit" >About</Link>
                    <br/>
                    <br/>
                    <Link to='/'>Contact us</Link>
                    <br/>
                    <br/>
                    <Link to='/'>Team & Community</Link>
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: 'center', padding: '2rem' }}>
                    <a href='https://www.github.com/enlight-me'>
                    <IconButton aria-label="Facebook" color="inherit">
                            <GitHubIcon color="action"/>
                        </IconButton>
                    </a>
                    <br/>                    
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
                </Grid>
                <Grid item xs={12} md={12} style={{ textAlign: 'center', padding: '0.5rem' , paddingTop: '0.1rem'}}>
                    <p>© 2020, Built with ❤ by Team Enlight.me</p>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
