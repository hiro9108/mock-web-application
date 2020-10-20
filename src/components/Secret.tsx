import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles/styles.module.css';

const secret = () => (
    <div>
        <div className={classes.Header}>Secret Page</div>
        <div className={classes.Element}><p><Link to='#'>Go to Python</Link></p></div>
        <div className={classes.Element}><p><Link to='#'>Go to Nodejs</Link></p></div>
        <div className={classes.Element}><p><Link to='#'>Go to Golang</Link></p></div>
        <div className={classes.Element}><p><Link to='/'>Go to Top Page</Link></p></div>
    </div>
);

export default secret;