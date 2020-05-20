const testStyle = theme => ({
  customClass: {
    border: "1px solid black",
    height: "500px",
    width: "500px",
    // [theme.breakpoints.up("md")]: {
    //    backgroundColor: "red",
    //    content: "up(md)"
    // },
  //   [theme.breakpoints.down("md")]: {
  //     content: "down(md)",
  //     backgroundColor: "blue"
  //  },
   [theme.breakpoints.up("sm")]: {
      backgroundColor: "green",
      contente: "up(sm)"
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "red",
      content: "down(sm)"
    }    

  }
})

export default testStyle