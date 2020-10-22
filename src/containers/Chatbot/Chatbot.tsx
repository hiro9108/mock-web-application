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
        this.selectedHandler = this.selectedHandler.bind(this)
    }

    nextQuestionHandler = (nextId: any) => {
        this.state.chats.push({
            type: 'question',
            text: this.state.datasets[nextId].question
        });
        this.setState({
            chats: this.state.chats,
            currentId: nextId,
            // answers: this.state.datasets[nextId].answers
        });

    }


    selectedHandler = (selectedAnswer: any, nextId: any) => {
        switch (true) {
            case (nextId === "init"):
                this.nextQuestionHandler(nextId);
                break;
            default:
                this.state.chats.push({
                    type: 'answers',
                    text: selectedAnswer
                });
                this.setState({
                    chats: this.state.chats
                });

                this.nextQuestionHandler(nextId);
                
                break;
        }
    }

    componentDidMount () {
        const initAnswer = "";
        this.selectedHandler(initAnswer, this.state.currentId)
    }


    render () {
        return (
            <div className={classes.CenterSection}>
                <div className={classes.CenterBox}>
                    <Chats chat={this.state.chats} />
                    <Answers contents={this.state.datasets[this.state.currentId]} selected={this.selectedHandler} />
                </div>
            </div>
        );
    };
};

export default Chatbot;