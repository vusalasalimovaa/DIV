import "./App.css";
import Router from "./routes/Router";
import products from "./data/data";

function App() {

  
  return (
    <>
      <Router products={products}/>
    </>
  );
}

export default App;
