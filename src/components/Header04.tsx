import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import image03 from './assets/MainPage/image03.jpg';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  }
}));

export default function Header04() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent} style={{ backgroundImage: `url(${image03})`, backgroundSize: '100% 401px' }}>
        <Container maxWidth="sm">
          <div style={{ height: "289px"}}/>
        </Container>
      </div>
    </>
  );
}
