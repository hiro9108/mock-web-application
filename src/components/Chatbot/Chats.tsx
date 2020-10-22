import React from 'react';

import Chat from './Chat';

// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import classes from '../../containers/Chatbot/chatbot.module.css';
import List from '@material-ui/core/List';



// const useStyles = makeStyles((theme: Theme) =>
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

const chats = (props: any) => {
    // const classes = useStyles();

    return (
        <List>
            <Chat chat={props.chat}/>
        </List>
    );
};

export default chats;