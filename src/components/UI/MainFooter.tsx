import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ForumIcon from '@material-ui/icons/Forum';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const MainFooter = (props: any) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        <Link to='/chatbot' style={{ textDecoration: 'none', color: 'black' }}>
          <ForumIcon style={{ fontSize: 40, marginRight: '15px' }} />
        </Link>
        <a target="_blank" href="https://github.com/hiro9108" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
          <GitHubIcon style={{ fontSize: 40, marginRight: '15px' }} />
        </a>
        <a target="_blank" href="https://linkedin.com/in/hiroshiegawa/" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
          <LinkedInIcon style={{ fontSize: 40 }} />
        </a>
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Online Education
      </Typography>
      <Copyright />
    </footer>
  );
};

export default MainFooter;
