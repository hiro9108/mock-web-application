import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Copyright from './UI/Copyright';
import capture from './assets/MainPage/golang.png';

import Swiper from '../components/Swiper';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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

const cards = [1, 2, 3, 4, 5, 6];

export default function Main() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
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
      <main>
        <Swiper />
        {/* Hero unit */}
        {/* <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Swiper />
                    </Container>
                </div> */}
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                      className={classes.cardMedia}
                      image={capture}
                      title="Image title"
                    />
                  <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                          Education function
                      </Typography>
                      <Typography>
                          Golang App
                      </Typography>
                    </CardContent>
                     <CardActions>
                      <Button size="small" color="primary">
                          View
                      </Button>
                    </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
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
    </>
  );
}
