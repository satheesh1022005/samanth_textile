import React, { useState, useEffect } from 'react';
import './Customer.css'; // Import the CSS file for styling

const customers = [
    { id: 1, name: 'John Doe', image: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
    { id: 2, name: 'Jane Smith', image: 'https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg' },
    { id: 3, name: 'Alice Johnson', image: 'https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png' },
    { id: 1, name: 'John Doe', image: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
    { id: 2, name: 'Jane Smith', image: 'https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg' },
    { id: 3, name: 'Alice Johnson', image: 'https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png' },
    { id: 1, name: 'John Doe', image: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
    { id: 2, name: 'Jane Smith', image: 'https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg' },
    { id: 3, name: 'Alice Johnson', image: 'https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png' },
    { id: 1, name: 'John Doe', image: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
    { id: 2, name: 'Jane Smith', image: 'https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg' },
    { id: 3, name: 'Alice Johnson', image: 'https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png' },
    { id: 1, name: 'John Doe', image: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
    { id: 2, name: 'Jane Smith', image: 'https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg' },
    { id: 3, name: 'Alice Johnson', image: 'https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png' },
    { id: 1, name: 'John Doe', image: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
    { id: 2, name: 'Jane Smith', image: 'https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg' },
    { id: 3, name: 'Alice Johnson', image: 'https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png' },

    
];

const Customer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % customers.length);
        }, 2000); // Adjust the interval (e.g., 2000ms) to control speed

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <div className='customer-main d-flex py-5 flex-column align-items-center'>
            <h2 className='py-5 p-2'>
            We associate with the world's leading retail outlets
            </h2>
            <div className="customer-container">
            <div
                className="customer-wrapper"
                style={{ transform: `translateX(-${currentIndex * 210}px)` }} // Adjust item width as needed
            >
                {customers.map(customer => (
                    <div className="customer-card" key={customer.id}>
                        <img src={customer.image} alt={customer.name} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Customer;
