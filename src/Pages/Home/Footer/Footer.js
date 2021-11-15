import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        //Footer Page 
        <div className="bg-dark text-white mt-2 p-2">
            <Container>
                <Grid container>
                    <Grid item xs={4} md={4} >
                        <Box>
                            <h1>Brand</h1>
                            <div class="d-flex flex-column">
                                <div class="p-1">Land Rover</div>
                                <div class="p-1">Lexus</div>
                                <div class="p-1">Porsche</div>
                                <div class="p-1">Rolls Royce</div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={4} >
                        <Box>
                            <h1>Usefull Links</h1>
                            <div class="d-flex flex-column">
                                <div class="p-1">Toyota Corolla</div>
                                <div class="p-1">Toyota Noah</div>
                                <div class="p-1">Mitsubishi Pajero</div>
                                <div class="p-1">Toyota Allion</div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={4} >
                        <Box>
                            <h1>Address</h1>
                            <div class="d-flex flex-column">
                                <div class="p-1">200, D-block, Green lane USA</div>
                                <div class="p-1">+880 1749497676</div>
                                <div class="p-1">+098 5425425742</div>
                                <div class="p-1">teslacar @gmail.com</div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
                <hr />
            </Container>
            <p>All Right Reserved © Tesla Car</p>
        </div>
        

    );
};

export default Footer;