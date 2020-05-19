
import {
	drawerWidth
} from "../globalStyle.js"

const headerStyle = (theme)=>({
  appBar: {
    width: "100%",
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
})

export default headerStyle;