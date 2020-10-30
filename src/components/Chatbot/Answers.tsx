import React from 'react';
import Answer from './Answer';

import classes from '../../containers/Chatbot/chatbot.module.css';

const answers = (props: any) => (
  <div className={classes.ChatAnsGrid}>
    {props.contents.answers.map((element: any, index: any) => (
      <Answer content={element.content} nextId={element.nextId} key={index.toString()} selected={props.selected} />
    ))}
  </div>
);

export default answers;
