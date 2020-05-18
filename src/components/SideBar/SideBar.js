import React from "react"
import Drawer from "@material-ui/core/Drawer"


export default function SideBar(props) {
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
					variant="permanent"	//"temporary" permanent 
					anchor={anchor}
					open={open}

        >
					{links}
        </Drawer>
    )
}