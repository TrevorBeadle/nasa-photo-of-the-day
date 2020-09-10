import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/const";
import DatePicker from "./DatePicker";

function App() {
  const [photoURL, setPhotoURL] = useState("");
  const [copyright, setCopyright] = useState("");
  const [explanation, setExplanation] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function formatDate(date) {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = "" + d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}?api_key=${API_KEY}${
          date ? `&date=${formatDate(date)}` : ""
        }`
      )
      .then((res) => {
        setPhotoURL(res.data.url);
        setExplanation(res.data.explanation);
        setCopyright(res.data.copyright);
        setTitle(res.data.title);
      })
      .catch((err) => console.log(err));
  }, [date]);

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
            <h4>NASA Photo of the Day</h4>
            <p>{explanation}</p>
            <DatePicker date={date} setDate={setDate} />
          </article>
        </section>
        <footer>
          <p>{copyright ? `© ${copyright}` : ""}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
