import React, { useState, useEffect } from "react";
import "./Customer.css"; // Import the CSS file for styling
import Slider from "react-slick";
const customers = [
  {
    id: 1,
    name: "John Doe",
    image: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image:
      "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png",
  },
  {
    id: 1,
    name: "John Doe",
    image: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image:
      "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png",
  },
  {
    id: 1,
    name: "John Doe",
    image: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image:
      "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png",
  },
  {
    id: 1,
    name: "John Doe",
    image: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image:
      "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png",
  },
  {
    id: 1,
    name: "John Doe",
    image: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image:
      "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png",
  },
  {
    id: 1,
    name: "John Doe",
    image: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image:
      "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png",
  },
];
const Customer = () => {
  const settings = {
    dots: false, // Enable dots for navigation
    arrows: false,
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 5, // Number of visible slides
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto slide
    autoplaySpeed: 2000, // Delay between slides
    responsive: [
      {
        breakpoint: 1024, // Tablet screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="customer-main">
      <h2 className="py-5 p-2 text-center">
        We associate with the world's leading retail outlets
      </h2>
      <div className="customer-container">
        <Slider {...settings}>
          {customers.map((customer, index) => (
            <div className="customer-card" key={`${customer.id}-${index}`}>
              <img src={customer.image} alt={customer.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Customer;
