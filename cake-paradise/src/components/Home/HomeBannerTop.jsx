import React from 'react'
import cake1 from "../../assests/cake1.png";
import cake2 from "../../assests/cake2.png";

function HomeBannerTop() {

    const topBannerContainer = {
        padding: "0",
        maxWidth: "80%",
        margin: "120px auto 0px auto",
        height: "80vh",
        overflow: "hidden",
        backgroundColor: "#ffe6e6",
      };

    const innerContainer={
        padding: "0",
        borderRadius: "15px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "100%",
        height: "75vh",
        backgroundColor: "#fff",
        margin:"20px 0 0 0",
        display: "flex", // Use flex to align image properly
        justifyContent: "flex-end", // Align image to the right
        alignItems: "center",
    };

    const imageStyle = {
        width: "605px",
        height: "590px",
        marginRight: "0", 
        marginBottom: "0", 
      };
    
    
  return (
    <div style={topBannerContainer}>
        <div style={innerContainer}>
        <div>
            <h1 style={{margin:"auto 10px auto 35px",fontWeight:"800",fontSize:"62px"}}>Taste the magic of<h1 style={{color:" #ff8080",fontWeight:"800",fontSize:"55px"}}>Sweet, Natural, Delicious Cakes</h1></h1>
        </div>
            <img src={cake1} style={imageStyle} />
        </div>
    </div>
  )
}

export default HomeBannerTop