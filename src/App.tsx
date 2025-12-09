/* eslint-disable @typescript-eslint/no-unused-vars */
import { getJoke, getQuote } from "./api/api";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import { useState, useEffect, useCallback } from "react";
import type { Content } from "./types/ButtonProps";

function App() {
  const [option, setOption] = useState("quote");
  const [content, setContent] = useState<Content>({ line1: "", line2: "" });
  const [loading, setLoading] = useState(true);

  const handleApi = useCallback(async () => {
    setLoading(true);
    try {
      let result;
      if (option === "joke") {
        result = await getJoke();
      } else {
        result = await getQuote();
      }
      setContent(result);
    } catch (e) {
      console.log(e);
      setContent({ line1: "Something went wrong", line2: "" });
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
        <Card content={content} />
      </div>
      <Button onClick={() => handleApi()} id="refresh">
        New {option}
      </Button>
    </div>
  );
}

export default App;
