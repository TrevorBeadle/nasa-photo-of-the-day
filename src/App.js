import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Photo from "./Components/Photo";
import { BASE_URL, API_KEY } from "./constants/const";

function App() {
  const [photoData, setPhotoData] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setPhotoURL(res.data.url);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="photo-container">{/* <Photo url={photoURL} /> */}</div>
    </div>
  );
}

export default App;
