import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import image02 from '../assets/MainPage/image02.jpg';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  }
}));

const Header03 = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent} style={{ backgroundImage: `url(${image02})`, backgroundSize: '100% 401px' }}>
      <Container maxWidth="sm">
        <div style={{ height: "289px"}}/>
      </Container>
    </div>
  );
};

export default Header03;
