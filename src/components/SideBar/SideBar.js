import React from "react"

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from "@material-ui/core/Icon"
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

import { makeStyles, usetheme } from '@material-ui/core/styles';

// styles ...
import styles from "../../assets/jss/components/sideBarStyle"
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(styles)

export default function SideBar(props) {
	const classes = useStyles();
	// const theme = useTheme();
	const { links, image, open, container, logo, logoText } = props
	
  const brand = (
    <div className={classes.logo}>
      {/* <a
        href="https://www.creative-tim.com?ref=mdr-sidebar"
        // className={classNames(classes.logoLink, {
        //   [classes.logoLinkRTL]: props.rtlActive
        // })}
        target="_blank"
      > */}
        <div className={classes.logoImage}>
					{ logo !== undefined ? 
						(<img src={logo} alt="logo" className={classes.img} />)
						:(null)
					}
        </div>
				<div className={classes.logoText}>{logoText}</div> 
      {/* </a> */}
    </div>
	);
		
	const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <Divider light = {true}/>
      <List className={classes.list}>
				{links.map((link, key)=> (
					<NavLink
						className={classes.item}
						to={link.layout + link.path}
						key={key}
						>
						<ListItem button className={classes.itemLink}>
							{typeof link.icon	=== "string" ? (
								<Icon className={classes.itemIcon}> {link.icon}</Icon> ):(
								<link.icon className={classes.itemIcon}></link.icon>		
								)
							}
							{/* <ListItemIcon>{link.icon}</ListItemIcon> */}
							<ListItemText 
								primary={link.name}
								className={classes.itemText}
								disableTypography={true}
							/>
						</ListItem>
					</NavLink>
					))
				}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );	
	return (
		<nav className={classes.drawer} aria-label="navigation bar">
		{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
		<Hidden mdUp implementation="css"> 
		{/* <Hidden smup implementation="css">  */}

			<Drawer
				container={container}
				variant="temporary"
				// anchor={theme.direction === 'rtl' ? 'left' : 'right'}
				anchor="right"
				open={open}
				onClose={props.handleDrawerToggle}
				classes={{
					paper: classes.drawerPaper,
				}}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
			>
				<div className={classes.sidebarWrapper}>
					{brand}
					{drawer}
				</div>
				
				{image !== undefined ? (
					<div
						className={classes.background}
						style={{ backgroundImage: "url(" + image + ")" }}
					/>
				) : null}
			</Drawer>
		</Hidden>
		<Hidden smDown implementation="css">
			<Drawer
				classes={{
					paper: classes.drawerPaper,
				}}
				variant="permanent"
				open
			>
				<div className={classes.sidebarWrapper}>
					{brand}
					{drawer}
				</div>
				
				{image !== undefined ? (
					<div
						className={classes.background}
						style={{ backgroundImage: "url(" + image + ")" }}
					/>
				) : null}
			</Drawer>
		</Hidden>
	</nav>

	)
}