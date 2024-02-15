import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState<String>("");

  const handleSubmit = () => {
    const inputDOM: HTMLElement | null = document.querySelector<
      HTMLInputElement
    >("input");
    const inputVal: string = inputDOM?.value;
    const greetingBox = document.getElementById<HTMLElement>("greeting");
    setName(inputVal);
    greetingBox?.append(inputVal);
    //greetingBox?.append(alert("you are hacked! 🐱‍💻"));
  };

  return (
    <div className="App">
      <h2>XSS in Typescript + React</h2>
      <input />
      <button onClick={handleSubmit}>Submit</button>
      <div id="greeting">{name}</div>
    </div>
  );
}
