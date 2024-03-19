import React from "react";
import "./Memes.css";
import Meme from "../Meme/Meme";
import { useEffect } from "react";

const Memes = ({ memes }) => {
  //   useEffect(() => {
  //     memes.map((meme) => {
  //       console.log(meme);
  //     });
  //   }, [memes]);
  return (
    <div className="memes_container">
      {memes.map((meme) => {
        return <Meme image={meme.image} />;
      })}
    </div>
  );
};

export default Memes;