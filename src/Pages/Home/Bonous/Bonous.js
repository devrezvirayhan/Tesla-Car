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

                        <h1 className="text-white mt-1 p-1">Porsche</h1>
                        <p className="text-white mt-2 p-3 bg-success">Being the world’s largest race car manufacturer, Porsche has been in the car brand league since 1931. This Germany based automobile company, they have made vehicles which would give a set class experience of an SUV with also giving the touch experience of being a sports car. With the up-to-date overall design of the car model, this brand had embarked with the rough yet smooth race track driving experience.</p>
                        <button type="button" class="btn btn-primary px-2 text-white mb-2">Coming Soon</button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box>
                        <img src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwYmFja2dyb3VuZHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

                        <h1 className="text-white mt-3 p-2">Bugatti</h1>
                        <p className="text-white mt-3 p-3 bg-success">With the establishment of Chiron, Bugatti has marked its way of being under the top car brands in and around the globe with elite status. This automobile company has made the most exclusive and the most innovative sports car which was ever introduced in the techno-waved world. With a speed wide tested and loved by its passengers, this car has been equipped with well-established safety kits.</p>
                        <button type="button" class="btn btn-primary px-2 text-white mb-2">Coming Soon</button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Bonous;