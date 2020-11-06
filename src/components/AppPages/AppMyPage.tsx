import React from 'react';
// import MyPage from 'xxx';
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
      <AppPageBar title='MY PAGE' />    
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <h1>TEST MYPAGE</h1>
      </main>
    </div>
  );
};

export default AppPage;
