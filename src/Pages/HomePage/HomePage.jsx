import React from "react";
import Memes from "../../Components/Memes/Memes";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./HomePage.css";
// import Footer from "../../Components/Footer/Footer";

const HomePage = ({ memes }) => {
  const [text] = useTypewriter({
    words: [
      "Interested in acquiring quality memes for sharing?",
      "This is exactly where you belong!",
    ],
    loop: true,
    typeSpeed: 115,
    deleteSpeed: 80,
  });
  const [meme_text] = useTypewriter({
    words: ["Ready yourself for $UrAnUs adventure"],
    loop: true,
    typeSpeed: 110,
    deleteSpeed: 80,
  });

  return (
    <>
    <div className="home-container">
      <div className="animated-text">
        <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </div>
      <div className="text">
        <h1 style={{ fontSize: "37px" }}>{meme_text}</h1>
      </div>
      <Memes memes={memes} />
    </div>
    
    </>
  );
};

export default HomePage;