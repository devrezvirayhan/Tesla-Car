import React from 'react';
import Banner from '../Banner/Banner';
import Bonous from '../Bonous/Bonous';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import ReviewHome from '../Review/ReviewHome/ReviewHome';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Products></Products>
           <Bonous></Bonous>
           <ReviewHome></ReviewHome>
           <Footer></Footer>
        </div>
    );
};

export default Home;