import logo from "./logo.svg";
import "./App.css";
import DisplayQuote from "./components/DisplayQuote";
import { useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        setQuote(data[0]);
      });
  };

  return (
    <div>
      <button type="button" onClick={getQuote}>
        Get quote
      </button>
      <DisplayQuote quote={quote} />
    </div>
  );
}

export default App;
