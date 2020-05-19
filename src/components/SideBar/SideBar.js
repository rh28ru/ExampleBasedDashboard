import React from "react"

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from "@material-ui/core/Icon"
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { makeStyles, useTheme } from '@material-ui/core/styles';

// styles ...
import styles from "../../assets/jss/components/sideBarStyle"
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(styles)

export default function SideBar(props) {
	const classes = useStyles();
	const theme = useTheme();
	const {links, color, open } = props
	
	const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
				{links.map((link, index)=> (
					<NavLink 
						to={link.layout + link.path}
						key={link.name}
						>
						<ListItem button >
							{typeof link.icon	=== "string" ? (
								<Icon> {link.icon}</Icon> ):(
								<link.icon></link.icon>		
								)
							}
							{/* <ListItemIcon>{link.icon}</ListItemIcon> */}
							<ListItemText primary={link.name}></ListItemText>
						</ListItem>
					</NavLink>
					))
				}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );	
	return (
		<nav className={classes.drawer} aria-label="mailbox folders">
		{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
		<Hidden smUp implementation="css">
			<Drawer
				container={props.container}
				variant="temporary"
				anchor={theme.direction === 'rtl' ? 'right' : 'left'}
				open={props.open}
				onClose={props.handleDrawerToggle}
				classes={{
					paper: classes.drawerPaper,
				}}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
			>
				{drawer}
			</Drawer>
		</Hidden>
		<Hidden xsDown implementation="css">
			<Drawer
				classes={{
					paper: classes.drawerPaper,
				}}
				variant="permanent"
				open
			>
				{drawer}
			</Drawer>
		</Hidden>
	</nav>

	)
}