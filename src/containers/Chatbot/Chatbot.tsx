import React, { Component } from 'react';
import classes from './chatbot.module.css';
import datasets from './datasets';
import MainAppBar from '../../components/UI/MainAppBar';
import MainFooter from '../../components/UI/MainFooter';
import Chats from '../../components/Chatbot/Chats';
import Answers from '../../components/Chatbot/Answers';
import ContactDialog from '../../components/Chatbot/ContactDialog';
import CssBaseline from '@material-ui/core/CssBaseline';

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
        this.dialogOpenHandler = this.dialogOpenHandler.bind(this)
        this.dialogCloseHandler = this.dialogCloseHandler.bind(this)
    }


    dialogOpenHandler = () => {
        this.setState({ open: true });
    };
    

    dialogCloseHandler = () => {
        this.setState({ open: false });
    };


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
                setTimeout(() => (
                    this.nextQuestionHandler(nextId)
                ), 500);
                break;
            case (nextId === "contact"):
                this.dialogOpenHandler();
                break;
            default:
                this.state.chats.push({
                    type: 'answers',
                    text: selectedAnswer
                });
                this.setState({
                    chats: this.state.chats
                });

                setTimeout(() => (
                    this.nextQuestionHandler(nextId)
                ), 500);

                break;
        }
    }

    componentDidMount () {
        const initAnswer = "";
        this.selectedHandler(initAnswer, this.state.currentId)
    }

    componentDidUpdate () {
        const scrollArea = document.getElementById("scrollArea");
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    }


    render () {
        return (
        <>
            <div className={classes.CenterSection}>
                <CssBaseline /> 
                <MainAppBar />
                <div className={classes.CenterBox}>
                    <Chats chat={this.state.chats} />
                    <Answers contents={this.state.datasets[this.state.currentId]} selected={this.selectedHandler} />
                    <ContactDialog open={this.state.open} dialogCloseHandler={this.dialogCloseHandler} />
                </div>
            </div>
            <MainFooter />
        </>
        );
    };
};

export default Chatbot;