import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/const";

function App() {
  const [photoURL, setPhotoURL] = useState("");
  const [copyright, setCopyright] = useState("");
  const [explanation, setExplanation] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setPhotoURL(res.data.url);
        setExplanation(res.data.explanation);
        setCopyright(res.data.copyright);
        setTitle(res.data.title);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(copyright);
  return (
    <div className="App">
      <div className="container">
        <header>
          <h3>DAILY SPACE FACTS</h3>
        </header>
        <section className="photo-info">
          <img src={photoURL} alt="NASA" />
          <article>
            <h1 className="title">{title}</h1>
            <p>{explanation}</p>
          </article>
        </section>
        <footer>
          <p>{`© ${copyright}`}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
