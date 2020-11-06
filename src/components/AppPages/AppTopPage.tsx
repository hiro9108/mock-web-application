import React from 'react';
import Dashboard from './Dashborad';
import AppPageBar from '../UI/AppPageBar';
import { drawerWidth } from '../UI/AppPageBar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const AppPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppPageBar title='YOUR EDUCATION' />    
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Dashboard />
      </main>
    </div>
  );
};

export default AppPage;
