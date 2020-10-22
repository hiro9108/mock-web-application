import React from 'react';
import Button from '@material-ui/core/Button';
// import { makeStyles, createStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() =>
//   createStyles({
//     "Button": {
//         marginBottom: "8px"
//     },
//   }),
// );

const answer = (props: any) => {
    // const classes = useStyles();

    return (
        <Button
            style={{ marginBottom: "8px" }} // temporary
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