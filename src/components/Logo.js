import * as React from 'react';
import { Typography } from '@mui/material';

const Logo = ({ color, variant }) => {

    return (
        <Typography variant={variant} sx={{
            fontFamily: 'Billabong',
            color: color
        }}>
            Fate
        </Typography>
    );
};
export default Logo;
