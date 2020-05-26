import React from "react"
import { makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core"

function createArray() { 
  const Array = [];
  for (let index = 0; index < 100; index++) {
    Array.push(index);
  }
  return Array;
};
const cssClass = {
  div1:{
    backgroundColor: "red"
  },
  div2: {
    backgroundColor: "blue"
  },
  div3: {
    backgroundColor: "green"
  },
  container:{
    border: "1px solid black"
  }
}
const useStyles = makeStyles(cssClass)

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      {/* <h1 >  Dashboard Page...path jsconfig.json</h1>
      { createArray().map(i=>( <div key={i}>{i}</div>)) } */}
   
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <div className = {classes.div1}>div1</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className = {classes.div2}>div2</div>
        </Grid> 
        <Grid item xs={12} sm={6} md={4}>
          <div className = {classes.div3}>div3</div>
        </Grid>                 
      </Grid>  
    </div> 
  )
}