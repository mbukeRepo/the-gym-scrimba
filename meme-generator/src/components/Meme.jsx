import { useState, useEffect, memo } from "react";
import { toPng } from "html-to-image";
import download from "downloadjs";
import Draggable from "react-draggable";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/28j0te.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    };
    getMemes();
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const clearInput = () => {
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: "",
      bottomText: "",
    }));
  };

  const node = document.getElementById("meme-img");
  const downloadImage = () => {
    toPng(node)
      .then((dataURL) => {
        download(dataURL, "meme.png");
      })
      .catch(() => console.log("error occured"));
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          placeholder="top text"
          className="form--input"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="bottom text"
          className="form--input"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <button className="form--button" onClick={clearInput}>
          Clear Text
        </button>
      </div>
      <div className="meme" id="meme-img">
        <img
          src={meme.randomImage}
          alt="suppose its a meme image"
          className="meme--image"
        />
        <Draggable bounds="parent">
          <h2 className="meme--text top">{meme.topText}</h2>
        </Draggable>
        <Draggable bounds="parent">
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </Draggable>
      </div>
      <div className="download--section">
        <button className="download--button" onClick={downloadImage}>
          Download Meme ⇩
        </button>
      </div>
    </main>
  );
};
export default memo(Meme);
