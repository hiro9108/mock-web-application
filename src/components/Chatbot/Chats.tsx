import React from 'react';
import List from '@material-ui/core/List';
import Chat from './Chat';
// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import classes from '../../containers/Chatbot/chatbot.module.css';

// const useStyles = makeStyles( () =>
//   createStyles({
//     root: {
//       width: '100%',
//       maxWidth: '36ch',
//       backgroundColor: theme.palette.background.paper,
//     },
//     inline: {
//       display: 'inline',
//     },
//   }),
// );

const chats = (props: any) =>
// const classes = useStyles();

  (
    <List style={{ height: '400px', padding: '0', overflow: 'auto' }} id="scrollArea">
      {props.chat.map((element: any, index: any) => (
        <Chat chat={element} key={index.toString()} />
      ))}
    </List>
  );
export default chats;
