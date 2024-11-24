
import React, { useRef } from 'react';
import './Machine.css';
import img1 from "../assets/real.jpg";
import img2 from "../assets/real1.jpg";
import img3 from "../assets/real2.png";

const Machine = () => {
    const slideRef = useRef(null);

    const handleNext = () => {
        const items = slideRef.current.children;
        slideRef.current.appendChild(items[0]);
    };

    const handlePrev = () => {
        const items = slideRef.current.children;
        slideRef.current.prepend(items[items.length - 1]);
    };

    return (
        <section className="machine">
        <div className="containers">
            <div className="slide" ref={slideRef}>
                <div className="item" style={{ backgroundImage: `url(${img1})` }}>
                    <div className="content">
                        <div className="name">Switzerland</div>
                        <div className="des">X-Dev, Transforming code into visual poetry..!</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="content">
                        <div className="name">Finland</div>
                        <div className="des">X-Dev, Transforming code into visual poetry..!</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: `url(${img3})` }}>
                    <div className="content">
                        <div className="name">Iceland</div>
                        <div className="des">X-Dev, Transforming code into visual poetry..!</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: `url(${img1})` }}>
                    <div className="content">
                        <div className="name">Australia</div>
                        <div className="des">X-Dev, Transforming code into visual poetry..!</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage:`url(${img2})`}}>
                    <div className="content">
                        <div className="name">Netherland</div>
                        <div className="des">X-Dev, Transforming code into visual poetry..!</div>
                        <button>See More</button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage:  `url(${img3})` }}>
                    <div className="content">
                        <div className="name">Ireland</div>
                        <div className="des">X-Dev, Transforming code into visual poetry..!</div>
                        <button>See More</button>
                    </div>
                </div>
            </div>
            <div className="button">
                <button className="prev" onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
                <button className="next" onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        </section>
    );
};

export default Machine;