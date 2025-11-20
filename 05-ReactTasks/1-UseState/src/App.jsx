import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Props from "./components/Props";

function App() {
  const [count, setCount] = useState(0);

  const azalt = () => {
    setCount(count - 1);
    if (count <= 0) {
      alert("olmazazz");
    }
  };

  const artir = () => {
    setCount(count + 1);
    if (count % 10 == 0 && count != 0) {
      alert("ok");
    }
  };

  return (
    <>
      <Props azalt = {azalt} artir = {artir} count={count}/>
    </>
  );
}

export default App;
