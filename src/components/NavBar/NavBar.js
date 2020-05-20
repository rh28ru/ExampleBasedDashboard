import React from "react"

import classNames from "classnames";
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from "@material-ui/core/Hidden";
import Toolbar from '@material-ui/core/Toolbar';
import AdminNavbarLinks from "./AdminNavbarLinks.js";
// import Button from "components/CustomButtons/Button"

// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// styles ...
import styles from "assets/jss/components/headerStyle";

const useStyles = makeStyles(styles);

export default function NavBar(props) {
  const classes = useStyles();
  const {links, color } = props
  function makeBrand() {
    let name;
    links.map(lnk => {
      if (window.location.href.indexOf(lnk.layout + lnk.path) !== -1) {
        name = lnk.rtlActive ? lnk.rtlName : lnk.name;
      // console.log('prop.layout + prop.path: ', prop.layout, prop.path)
      // console.log('rtlActive: ', props.rtlActive)
      }
      return null;  
    });
    return name;
  }
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
	return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          <Button color = "inherit" href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          {/* {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />} */}
          <AdminNavbarLinks />
        </Hidden>      
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit" //inherit
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
  }

NavBar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};