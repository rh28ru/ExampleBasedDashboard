import { 
	drawerWidth 
} from "./globalStyle";

const adminStyle = ()=>({
		wrapper: {
			position: "relative",
			top: "700px",
			height: "100vh"
		},
    mainPanel:{
			position: "relative",
			width: `calc(100%-${drawerWidth}px)`,
			// width: "500px",
			color: "blue",
			backgroundColor: "black",
			overflow: "auto"
		},
		sideBar:{
			width: "500px",
			backgroundColor: "red"
		}
});

export default adminStyle;