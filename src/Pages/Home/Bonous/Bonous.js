import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import './Bonous.css';


const Bonous = () => {
    return (
        <div className="bg-dark mt-2 mb-2 squre">
            <Typography className="Car p-3" variant="h3" gutterBottom component="div">
                Comming Soon
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <img src="https://images.unsplash.com/photo-1617654112329-c446806d40e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwYmFja2dyb3VuZHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box>
                        <img src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwYmFja2dyb3VuZHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Bonous;