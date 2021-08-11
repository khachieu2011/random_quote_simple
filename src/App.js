import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const fetchAdvice = () => {
    const url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    axios
      .get(url)
      .then((response) => {
        const data = response.data.quotes;
        const quoteNum = Math.floor(Math.random() * data.length);
        const randomQuote = data[quoteNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  // const onButtonClick = useCallback((event) => {
  //   fetchAdvice();
  // }, []);
  return (
    <div className="back w-full h-screen flex justify-center items-center bg-gray-800">
      <div className="card w-auto flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-2xl">
        <h1 className="heading p-4">{quote}</h1>
        <h3 className="author mt-10 mb-10 self-end">{author}</h3>

        <div>
          <div>face</div>
          <div>twitter</div>

          <button
            className="button border-2  p-3 rounded-xl mt-25"
            onClick={() => fetchAdvice()}
          >
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
