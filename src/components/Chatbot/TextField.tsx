import React from 'react';
import TextField from '@material-ui/core/TextField';

const textField = (props: any) => (
    <TextField
        type={props.type}
        label={props.label}
        value={props.value}
        rows={props.rows}
        multiline={props.multiline}     
        onChange={props.onChange}
        fullWidth={true}
        margin={"dense"}
    />
);

export default textField;