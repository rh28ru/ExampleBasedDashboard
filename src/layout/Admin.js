import React from 'react'
import Drawer from "@material-ui/core/Drawer"
import styles from "../assets/jss/adminStyle.js"


export default function Admin() {
    return (
        <div>
            <Drawer style = {styles.wrapper}
                anchor="left"
                open={true}
            >
                <div> 
                    Anchor Drawer
                    <ul>
                        <li> test_link_0</li>
                        <li> test_link_2</li>
                        <li> test_link_367576767676767676766ffffffffffffffffffffffff</li>
                    </ul>
                </div>
            </Drawer>
        </div>
    )
}