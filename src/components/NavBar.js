import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    }
}));

const NavBar = ({ languageMode, handleLanguageToggle }) => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static"
                style={{
                    background: "transparent",
                    boxShadow: "none",
                    color: "#3F3D4B"
                }}>
                <Toolbar>
                    <Typography className={classes.title} variant="h4" noWrap>
                        Enlight.me
                    </Typography>

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
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
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Home</Button>
                    </div>
                </Toolbar>

            </AppBar>
        </div>

    );
}
export default NavBar;
