import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  // const [isFirst, setIsFirst] = useState(true)
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   if (isFirst) {
  //     setIsFirst(false)
  //   }else{
  //     console.log('Salam');
  //   }
  // }, [count])

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
      
  }, []);

  console.log(data);

  return (
    <>
      {
        data.map(item => (
          <h1 key={item.id}>{item.name} - {item.email}</h1>
        ))
      }
    </>
  );
}

export default App;
