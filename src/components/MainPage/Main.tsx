import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import capture from '../assets/MainPage/golang.png';

import Swiper from './Swiper';
import MainAppBar from '../../components/UI/MainAppBar';
import MainFooter from '../UI/MainFooter';

const useStyles = makeStyles((theme) => ({
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
}));

const cards = [1, 2, 3, 4, 5, 6];

const Main = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <MainAppBar />
      <main>
        <Swiper />
        <Container className={classes.cardGrid} maxWidth="xl">
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
      <MainFooter />
    </>
  );
};

export default Main;
