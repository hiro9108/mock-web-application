import React from 'react';
import { Link } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link to="/" color="inherit">
            Creator Website
            </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

export default copyright;