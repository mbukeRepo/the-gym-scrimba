import React from "react";
import troll from "../Images/troll-face.png";
const Header = () => {
  return (
    <header className="header">
      <img src={troll} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
};
export default Header;
