import React from 'react';
import Banner from '../Banner/Banner';
import Bonous from '../Bonous/Bonous';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Products></Products>
           <Bonous></Bonous>
           <Footer></Footer>
        </div>
    );
};

export default Home;