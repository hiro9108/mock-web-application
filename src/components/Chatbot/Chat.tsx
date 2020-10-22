import React from 'react';

// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Profile from '../assets/avatar01.png';
import ChildCareIcon from '@material-ui/icons/ChildCare';

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
    const isQuestion = (props.chat.type === "question");

    return (
        <>
            <ListItem style={{ flexDirection: isQuestion ? "row" : "row-reverse" }}>
                <ListItemAvatar>
                    { isQuestion ? (
                        <Avatar alt="Icon" src={Profile} />
                    ) : (
                        <ChildCareIcon fontSize="large" />
                        // <Avatar alt="Icon" src="#" />
                    )}
                </ListItemAvatar>
                <div className={classes.ChatColor}>
                    {props.chat.text}
                </div>
            </ListItem>
        </>
    );
};

export default chat;