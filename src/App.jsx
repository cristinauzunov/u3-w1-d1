import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="container">
      <ImageComponent src="https://placecats.com/300/300" alt="immagine" />
      <div className="buttons">
      <ButtonComponent content="1">ciao</ButtonComponent>
      <ButtonComponent content="2">ciao</ButtonComponent>
      <ButtonComponent content="3">ciao</ButtonComponent>
      </div>
      </div>
    </>
  );
}

export default App;
