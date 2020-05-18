import React from "react"
import Drawer from "@material-ui/core/Drawer"
import { makeStyles } from "@material-ui/core/styles"
// styles...

import styles from "../../assets/jss/components/sideBarStyle.js"

const useStyles = makeStyles(styles)

export default function SideBar(props) {
	const classes = useStyles()
	const { open, routes, anchor } = props;
	const links = (
		<ul>
			{routes.map( (route, key) => {
				return (
					<li key={key}><a href={route.path}>{route.path}</a></li>
				)
			})}
		</ul>
	);
	return (
		<Drawer
			// className = {classes.drawer}
			variant="permanent"	//"temporary" permanent 
			anchor={anchor}
			open={open}
			classes={{
				paper: classes.drawer,
			}}
		>
			{links}
		</Drawer>
	)
}