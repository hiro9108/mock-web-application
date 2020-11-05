import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const MainAppBar = (props: any) => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <LocationCityIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Education
        </Typography>
        <nav>
          <Link color="textPrimary" to="/signIn" className={classes.link} style={{ textDecoration: 'none', color: 'white' }}>
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </Link>
          <Link color="textPrimary" to="/signUp" className={classes.link} style={{ textDecoration: 'none', color: 'white' }}>
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
