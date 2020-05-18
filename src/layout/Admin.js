import React from "react"
import SideBar from "../components/SideBar/SideBar.js"
import NavBar from "../components/NavBar/NavBar.js"
import { makeStyles } from "@material-ui/core/styles"

// routes for dashboard page...
import routes from "../routes/dashboardRoutes.js"

//Styles ..,
import styles from "../assets/jss/adminStyle.js"

const useStyles = makeStyles(styles)

export default function Admin() {
	const classes = useStyles();
	console.log("class:", classes);
  return (
    <div className = {classes.wrapper}>
			<div className = {classes.sideBar}>
				<SideBar
					routes = {routes}
					open = {true}
					anchor="left"
				/>
			</div>
			<div className = {classes.mainPanel}>
				<NavBar/>		
			</div>
    </div>
  )
}