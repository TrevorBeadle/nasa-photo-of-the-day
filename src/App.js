import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Photo from "./Components/Photo";
import { BASE_URL, API_KEY } from "./constants/const";
import Copyright from "./Components/Copywrite";

function App() {
  const [url, setUrl] = useState("");
  const [copyright, setCopyright] = useState("");
  const [explanation, setExplanation] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setUrl(res.data.url);
        setExplanation(res.data.explanation);
        setCopyright(res.data.copyright);
        setTitle(res.data.title);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(copyright);
  return (
    <div className="App">
      <div className="photo-container">
        <Photo url={url} />
        <Copyright copyright={copyright} />
      </div>
      <div className="info-container">
        {/*Title Component*/}
        {/*Explanation Component*/}
      </div>
    </div>
  );
}

export default App;
