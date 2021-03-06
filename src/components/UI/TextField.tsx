import React from 'react';
import TextField from '@material-ui/core/TextField';

const textField = (props: any) => (
  <TextField
    name={props.name}
    type={props.type}
    label={props.label}
    value={props.value}
    rows={props.rows}
    multiline={props.multiline}
    onChange={props.onChange}
    variant={props.variant}
    fullWidth
    margin="dense"
  />
);

export default textField;
