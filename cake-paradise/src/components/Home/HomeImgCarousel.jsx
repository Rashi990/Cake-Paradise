import React from 'react'
import image1 from "../../assests/image1.jpg";
import image2 from "../../assests/image2.jpg";
import image3 from "../../assests/image3.jpg";
import image4 from "../../assests/image4.jpg";

function HomeImgCarousel() {
  const imageStyle = {
    height: "100%",
    objectFit: "cover",
    width: "100%",
    borderRadius: "20px"
  };

  const carouselContainerStyle = {
    padding: "0",
    borderRadius: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "80%",
    margin: "130px auto 20px auto",
    height: "75vh",
    overflow: "hidden",
    backgroundColor: "#ffe6e6"
  };

  const carouselStyle = {
    width: "100%",
    height: "100%"
  };

  return (
    <div style={carouselContainerStyle}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
        style={carouselStyle}
      >
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner" style={{ height: "100%" }}>
          <div className="carousel-item active" style={{ height: "100%" }}>
            <img
              src={image1}
              className="d-block w-100"
              alt="First Slide"
              style={imageStyle}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First Slide Label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src={image2}
              className="d-block w-100"
              alt="Second Slide"
              style={imageStyle}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second Slide Label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src={image3}
              className="d-block w-100"
              alt="Third Slide"
              style={imageStyle}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide Label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: "100%" }}>
            <img
              src={image4}
              className="d-block w-100"
              alt="Fourth Slide"
              style={imageStyle}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth Slide Label</h5>
              <p>Some representative placeholder content for the fourth slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  )
}

export default HomeImgCarousel