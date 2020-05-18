
import {
	drawerWidth
} from "../globalStyle.js"


const headerStyle = ()=>({
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth
	},
	root: {
    display: 'flex',
  },
  menuButton: {
    marginLeft: "5px", // theme.spacing(8)
  },
  title: {
		flexGrow: 1,
		color: "red"
  }
})

export default headerStyle;