import React, { useState } from "react";
import './about.css';
import { useSpring, animated } from '@react-spring/web';
import image1 from './images/1-2.png';
import image2 from './images/2-2.png';
import image3 from './images/3-2.png';

const images = [
  image1, // replace with your image paths
  image2,
  image3,
];

const Slide = ({ image, isHovered, onHover }) => {
  const springProps = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  });

  return (
    <animated.div
      className="slide"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={springProps}
    >
      {isHovered ? (
        <div className="hover-content">
          <p>Read more about this amazing image!</p>
          <button onClick={() => window.open('https://fylehq.com', '_blank')}>
            Read more
          </button>
        </div>
      ) : (
        <img src={image} alt="Slide" />
      )}
    </animated.div>
  );
};

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="about-container">
      <div className="bada-head">WHAT WE DO</div>
      <div className="horizontal-container">
        <div className="dusra-head">Services provide for you</div>
        <div className="about-content">
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum
        </div>
      </div>
      <div className="slider-container">
        {images.map((image, index) => (
          <Slide
            key={index}
            image={image}
            isHovered={hoveredIndex === index}
            onHover={(hoverState) => setHoveredIndex(hoverState ? index : null)}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
