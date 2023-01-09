import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Logo from '../components/Logo';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login3 = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh'
            }}
        >
            <Paper elevation={3} sx={{
                padding: '30px'
            }}>
                <Logo color="#2B2B2B" variant="h4" />
                <Divider sx={{ my: 1 }} />

                <FormControlLabel control={<Checkbox />} label="مرا به خاطر بسپار" />
            </Paper>
        </Box>
    );
};
export default Login3;
