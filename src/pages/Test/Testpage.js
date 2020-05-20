import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from "./TestStyle"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(styles)

export default function FixedContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" className = {classes.customClass}/>
      </Container>
    </React.Fragment>
  );
}
