import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import TextField from '../../components/UI/TextField';


class Analize extends Component {
  render () {
    return (
      <Container fixed>
        <TextField
          type="text"
          label="Data"
          value="state value"
          rows={1}
          multiline={false}
          // onChange={props.onChange}
          variant="filled"
        />
        <Button variant="contained">button</Button>
      </Container>
    );
  }
}

export default Analize;