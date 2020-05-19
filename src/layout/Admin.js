import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// components
import SideBar from "../components/SideBar/SideBar"
import NavBar from "../components/NavBar/NavBar"
// styles ... 
import styles from "../assets/jss/adminStyle"
// routes for Links on SideBar and NavBar...
import links from "../routes/dashboardRoutes"
import {Switch, Route, Redirect } from "react-router-dom"

const useStyles = makeStyles(styles)

const switchRoutes = (
  <Switch>
    {links.map((link, key) => {
      if (link.layout === "/admin") {
        return (
          <Route
            path={link.layout + link.path}
            component={link.component}
            key={link.name}
          />
        );
      }
      return null;
    })}
    {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
  </Switch>
);


function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log('[mobileOpen]:', mobileOpen)
  };
  
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline /> { /* check this */}
      <NavBar
        handleDrawerToggle = {handleDrawerToggle}
      />
      <SideBar
        links = {links}
        container = {container}
        open={mobileOpen}
        handleDrawerToggle = {handleDrawerToggle}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {switchRoutes}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
