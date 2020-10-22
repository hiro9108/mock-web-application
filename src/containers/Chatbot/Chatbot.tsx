import React, { Component } from 'react';

import classes from './chatbot.module.css';
import datasets from './datasets';

import Chats from '../../components/Chatbot/Chats';
import Answers from '../../components/Chatbot/Answers';

class Chatbot extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            answers: [],
            chats: [],
            currentId: "init",
            datasets: datasets,
            open: false,
        }
    }
    render () {
        return (
            <div className={classes.CenterSection}>
                <div className={classes.CenterBox}>
                    <Chats chat="This is a test chat" />
                    <Answers contents={this.state.datasets[this.state.currentId]} />
                </div>
            </div>
        );
    };
};

export default Chatbot;