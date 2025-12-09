import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [option, setOption] = useState("joke");
  // useEffect(() => {
  //   try {
  //   } catch (e) {
  //   } finally {
  //   }
  // }, [option]);

  function handleSelecteOption(next: string) {
    setOption((prev) => (prev !== next ? next : prev));
  }

  function handleApi() {
    console.log("Hello");
  }

  return (
    <div className="container">
      <div className="options-container">
        <Button onClick={() => handleSelecteOption("joke")}>Joke</Button>
        <Button onClick={() => handleSelecteOption("quote")}>Quote</Button>
      </div>
      <div>
        <Card>some text from API</Card>
      </div>
      <Button onClick={() => handleApi()}>New {option}</Button>
    </div>
  );
}

export default App;
