import React from 'react';

import Answer from './Answer';

const answers = (props: any) => (
    <>
        {props.contents.answers.map((element: any, index: any) => (
            <Answer content={element.content} nextId={element.nextId} key={index.toString()} selected={props.selected} />
        ))}
    </>
);

export default answers;