import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Analize extends Component {
    render () {
        return (
            <Container fixed>
                <TextField variant="outlined"/>
                <Button variant="contained">button</Button>
            </Container>
        );
    }
}

export default Analize;