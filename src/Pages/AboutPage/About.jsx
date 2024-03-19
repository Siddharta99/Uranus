import React from "react";
import "./About.css";
// import Footer from "../../Components/Footer/Footer";
import ImageContainer from "../../Components/ImageContainer/ImageContainer";

const About = ({ memes }) => {
  return (
    <div className="about-container">
      <div className="banner-container">
        <img
          src="https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000"
          alt=""
        />
        <div className="logo-banner">
          <img
            src="https://hotemoji.com/images/dl/i/moon-emoji-by-twitter.png"
            alt=""
            className="logo-banner-img"
          />
        </div>
      </div>
      <div className="logo-name">
        <h1>$URANUS Web</h1>
      </div>
      <div className="content">
        <p>
          Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct
          on <b>Saturday, January 27</b>, then retrogrades again on 
          <b>Sunday, September 1.</b> This suggests ongoing evolution in your
          home life and personal growth.{" "}
        </p>
        <br />

        <p>
          Uranus champions individuality, social justice, and authenticity.
          During its retrograde, focus on living by your values and perhaps
          engage more actively in humanitarian efforts.
        </p>
        <br />
        <p>
          In 2024, the location of the Sun on the March equinox is in the
          constellation of Pisces but also on the border of Aquarius. So, we are
          slowly moving into a new age, from Pisces to Aquarius.
        </p>
        <br />
        <p>
          Aquarius is ruled by Uranus, the planet that governs innovation,
          technology, and surprising events. Uranus perfectly mirrors Aquarius'
          distinctive attitude, complementing the nontraditional nature of these
          visionary air signs.
        </p>
        <br />
        <ul>
          <li>
            <p>
              Everyone Loves to Pump Uranus more then they like when Uranus
              Dumps.
            </p>
          </li>
          <li>
            <p>The liquidity injections just keep coming into Uranus.</p>
          </li>
          <li>
            <p>Don’t pass gas (it’s gonna be giant)</p>
          </li>
          <li>
            <p>Hold onto Uranus!</p>
          </li>
          <li>
            <p>
              Disclaimer: This is all in good fun – a blend of memes, astrology,
              and crypto. We will not go moon, we going to Uranus.
            </p>
          </li>
          <p>In Crypto We Trust, But In Uranus, We Believe!</p>
        </ul>
        <div className="mirror">
          <h2>In Crypto We Trust, But In Uranus, We Believe!</h2>
          <h4>The Memeifesto</h4>

          <p>
            Welcome to the wild side of crypto - where memes aren't just dreams,
            and astrology isn’t just your daily horoscope.
          </p>
        </div>
      </div>
      <div className="image-container">
        <ImageContainer images={memes} duration={3} />
      </div>
    </div>
  );
};

export default About;