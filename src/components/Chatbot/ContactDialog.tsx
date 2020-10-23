import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from './TextField';

class ContactDialog extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            email: "",
            description: ""
        }

        this.onChangeNameHandler = this.onChangeNameHandler.bind(this)
        this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this)
        this.onChangeDescHandler = this.onChangeDescHandler.bind(this)
    }

    onChangeNameHandler = (event: any) => {
        this.setState({ name: event.target.value })
    }

    onChangeEmailHandler = (event: any) => {
        this.setState({ email: event.target.value })
    }

    onChangeDescHandler = (event: any) => {
        this.setState({ description: event.target.value })
    }

    // Todo Create Handler for connection back-end from submit button

    render () {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.dialogCloseHandler}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Contact Information"}</DialogTitle>
                <DialogContent>
                    <TextField 
                        type={"text"} label={"Name"} value={this.state.name} rows={1}
                        multiline={false} onChange={this.onChangeNameHandler}
                    />
                    <TextField 
                        type={"email"} label={"Email"} value={this.state.email} rows={1}
                        multiline={false} onChange={this.onChangeEmailHandler}
                    />
                    <TextField 
                        type={"text"} label={"Description"} value={this.state.description} rows={5}
                        multiline={true} onChange={this.onChangeDescHandler}
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={this.props.dialogCloseHandler} color="primary" variant="outlined">
                    Cancell
                </Button>
                <Button onClick={this.props.dialogCloseHandler} color="primary" variant="outlined">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        )
    }
};

export default ContactDialog;