import React from 'react';

import Answer from './Answer';

const answers = (props: any) => (
    <>
        {props.contents.answers.map((element: any, index: any) => (
            <Answer content={element.content} key={index.toString()}/>
        ))}
    </>
);

export default answers;