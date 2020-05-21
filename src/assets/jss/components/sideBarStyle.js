import {
  drawerWidth,
  defaultFont,
  boxShadow,
  transition,
  blackColor,
  whiteColor,
  grayColor,
  successColor,

  hexToRgb
}from "../globalStyle"

const sideBarStyle = ((theme) => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
 
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
    overflowScrolling: "touch"
  },  
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,  

  drawerPaper: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
    ...boxShadow,
    width: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      position: "fixed",
      height: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      ...boxShadow,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...transition
    }
  },

  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: blackColor,
      opacity: ".3"
    }
  },
  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset"
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none",
    "&:hover,&:focus,&:visited,&": {
      color: whiteColor
    }
  },
  itemLink: {
    width: "auto",
    transition: "all 500ms linear",
    margin: "10px 15px 0",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    backgroundColor: "transparent",
    ...defaultFont
  },
  itemIcon: {
    width: "10px",
    height: "10px",
    fontSize: "10px",
    lineHeight: "20px",
    float: "left",
    marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
  },
  itemIconRTL: {
    marginRight: "3px",
    marginLeft: "15px",
    float: "right"
  },
  itemText: {
    ...defaultFont,
    margin: "0",
    lineHeight: "30px",
    fontSize: "14px",
    color: whiteColor
  },
  itemTextRTL: {
    textAlign: "right"
  },
  whiteFont: {
    color: whiteColor
  },
  logo: {
    position: "relative",
    padding: "10px 10px",
    zIndex: "1",
    display: 'flex', // insert by RH.
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      // height: "1px",
      // right: "15px",
      // width: "calc(100% - 30px)",
      backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)"
    }
  },
  logoImage: {
    width: "40px",
    // display: "inline-block",
    maxHeight: "40px",
    marginLeft: "0",
    marginRight: "0",
    display: 'flex' // insert by RH.
  },    

  img: {
    width: "40px",
    height: "40px",
    top: "0px",
    // position: "absolute",
    // verticalAlign: "middle",
    border: "0",
    flex: 1,
  }, 

  logoText: {
    ...defaultFont,
    fontSize: "25px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "40px",
    paddingLeft: "5px",
    color: whiteColor,
    flex: 1,  // insert by RH
  },

  logoLink: {
    ...defaultFont,
    textTransform: "uppercase",
    padding: "5px 0",
    display: "block",
    fontSize: "18px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "30px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover": {
      color: whiteColor
    }
  },

  logoLinkRTL: {
    textAlign: "right"
  },
  
}));
export default sideBarStyle