import React from 'react';

// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }),
// );

const answer = (props: any) => {
    // const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="primary" 
            fullWidth={true}
            onClick={() => props.selected(props.content, props.nextId)}
        >
            {props.content}
        </Button>
    );
};

export default answer;