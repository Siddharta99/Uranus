import React from "react";
import "./Meme.css";
import { useEffect } from "react";

const Meme = ({ image }) => {
  return (
    <div className="meme-container">
      <img src={image} alt="" />
    </div>
  );
};

export default Meme;