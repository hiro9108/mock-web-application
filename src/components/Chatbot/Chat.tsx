import React from 'react';

// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import classes from '../../containers/Chatbot/chatbot.module.css';

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

const chat = (props: any) => {
    // const classes = useStyles();

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Icon" src="#" />
                </ListItemAvatar>
                <ListItemText
                    className={classes.ChatColor}
                    primary={props.chat}
                />
            </ListItem>
        </>
    );
};

export default chat;