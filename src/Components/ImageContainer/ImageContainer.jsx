import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ImageContainer.css";

const ImageContainer = ({ images, duration }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [currentImage, images, duration]);

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`image-wrapper ${currentImage === index ? "active" : ""}`}
        >
          <img src={image.image} />
        </div>
      ))}
    </div>
  );
};

ImageContainer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  duration: PropTypes.number.isRequired,
};

export default ImageContainer;