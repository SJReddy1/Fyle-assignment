import React, { useState } from "react";
import './project.css';
import image1 from './images/image.png';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const Project = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    const [image, setImage] = useState(image1);

    const slides = [
        {
            id: 1,
            title: "Genderless Kei – Japan’s Hot",
            content: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
            image: image1
        },
        {
            id: 2,
            title: "Better Strategy & Quality",
            content: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
            image: image2
        },
        {
            id: 3,
            title: "Genderless Kei – Japan’s Hot",
            content: "Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of",
            image: image3
        }
    ];

    const handleClick = (slide) => {
        setActiveSlide(slide.id);
        setImage(slide.image);
    };

    return (
        <div className="project-container">
            <div className="ourproj">
                Our project
            </div>
            <div className="whyb">
                Why We Are Best
            </div>
            
            <div className="image-section">
                <div className="img-proj" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="proj-tiles">
                    {slides.map(slide => (
                        <div 
                            key={slide.id} 
                            className={`proj-slide ${activeSlide === slide.id ? 'active' : ''}`}
                            onClick={() => handleClick(slide)}
                        >
                            <div className="slide-head">
                                {slide.title}
                            </div>
                            <div className="content-proj">
                                {slide.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
