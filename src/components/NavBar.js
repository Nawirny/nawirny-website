import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MoreIcon from '@material-ui/icons/MoreVert';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Logo from "../img/logo-enlightme-1.png";

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    grow: {
        flexGrow: 1
    },
    title: {
        display: "flex",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));


const NavBar = ({ languageMode, handleLanguageToggle }) => {
    const classes = useStyles();

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const LanguageSwitch = () => {
        return (
            <FormGroup row style={{ marginRight: "40px" }}>
            <FormControlLabel
                control={
                    <Switch
                        checked={languageMode}
                        onChange={() => handleLanguageToggle()}
                        value="checkedB"
                        color="primary"
                        inputProps={{ "aria-label": "primary checkbox" }}
                    />
                }
                label={languageMode ? "Arabic" : "English"}
                labelPlacement="start"
            />
        </FormGroup>

        );
    }

    /**
     * Functions for Mobile menu 
     */
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
      };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <LanguageSwitch/>
            </MenuItem>
            <MenuItem>
                <Link to='/'>
                    <IconButton aria-label="Home" color="inherit">
                        <HomeIcon />
                    </IconButton>
                    Home
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to='/platforms'>                  
                    <IconButton aria-label="Platforms" color="inherit">
                        <DevicesOtherIcon />
                    </IconButton>
                    Platforms
                </Link>
            </MenuItem>            <MenuItem>
                <Link to='/about'>
                    <IconButton aria-label="About" color="inherit">
                        <InfoIcon />
                    </IconButton>
                    About
                </Link>
            </MenuItem>
        </Menu>
    );

    /**
     * Render function 
     */
    return (
        <div className={classes.grow}>
            <AppBar position="fixed"
                style={{
                    background: "white",
                    boxShadow: "none",
                    color: "#3F3D4B"
                }}>
                <Toolbar>
                    <Link to='/'>
                        <img src={Logo} style={{ maxHeight: '80%', height: '50px' }} alt='' />
                    </Link>

                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <LanguageSwitch/>
                        <Link to='/'><Button color="inherit">Home</Button></Link>
                        <Link to='/platforms' color="inherit" ><Button color="inherit">Platforms</Button></Link>
                        <Link to='/about'><Button color="inherit">About</Button></Link>
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>

            </AppBar>
            {renderMobileMenu}
            <div className={classes.offset} />
        </div>

    );
}
export default NavBar;
