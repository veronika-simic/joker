/* eslint-disable @typescript-eslint/no-unused-vars */
import { getJoke, getQuote } from "./api/api";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [option, setOption] = useState("quote");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const handleApi = useCallback(async () => {
    setLoading(true);
    try {
      if (option === "joke") {
        const joke = await getJoke();
        setContent(joke);
      } else {
        const quote = await getQuote();
        setContent(quote);
      }
    } catch (e) {
      console.log(e);
      setContent("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [option]);

  useEffect(() => {
    handleApi();
  }, [handleApi]);

  function handleSelecteOption(next: string) {
    setOption((prev) => (prev !== next ? next : prev));
  }

  return (
    <div className="container">
      <div className="options-container">
        <Button onClick={() => handleSelecteOption("joke")} id="joke">
          Joke
        </Button>
        <Button onClick={() => handleSelecteOption("quote")} id="quote">
          Quote
        </Button>
      </div>
      <div>
        <Card>{content}</Card>
      </div>
      <Button onClick={() => handleApi()} id="refresh">
        New {option}
      </Button>
    </div>
  );
}

export default App;
