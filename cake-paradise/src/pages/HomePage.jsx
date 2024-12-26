import React from 'react';
import Header from '../components/Header/Header';
import HomeBannerTop from '../components/Home/HomeBannerTop';

function HomePage() {
  return (
    <div style={{ background: "#ffe6e6", minHeight: "100vh", margin: "0" }}>
        <Header/>
        <HomeBannerTop/>

    </div>
  );
}

export default HomePage;
