import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./Carousel.css"; // Create a CSS file for additional styles

const Carousel = () => {
  const carouselItems = [
    {
      image: "https://picsum.photos/id/1015/800/400", // Random image from Picsum
      companyName: "Samanth Textiles",
      passage:
        "This is a passage about Company One. It provides excellent services and products.",
    },
    {
      image: "https://picsum.photos/id/1025/800/400", // Random image from Picsum
      companyName: "Samanth Textiles",
      passage:
        "This is a passage about Company Two. Known for its innovative solutions.",
    },
    {
      image: "https://picsum.photos/id/1035/800/400", // Random image from Picsum
      companyName: "Samanth Textiles",
      passage:
        "This is a passage about Company Three. Committed to customer satisfaction.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={item.companyName} />
            <div className="carousel-content">
              <h1>{item.companyName}</h1>
              <p>{item.passage}</p>
              <button className="explore-btn">
                Explore<span className="right-arrow">&#8250;</span>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
