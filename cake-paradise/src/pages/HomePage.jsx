import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import HomeImgCarousel from '../components/Home/HomeImgCarousel';
import HomeBannerTop from '../components/Home/HomeBannerTop';

function HomePage() {
  return (
    <div style={{ background: "#ffe6e6", minHeight: "100vh", margin: "0" }}>
        <Header/>
        <HomeBannerTop/>
        <HomeImgCarousel/>
        <Footer/>
    </div>
  );
}

export default HomePage;
