import React from 'react';
import Typography from '@material-ui/core/Typography';

const copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
            Creator Website
            {' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

export default copyright;