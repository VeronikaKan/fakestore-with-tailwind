import Header from "./components/Header";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useState } from "react";

function App() {
  const [card,setCard] = useState(0)

  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element = {<Home setCard = {setCard}/>}/>
      <Route path="/details" element = {<Details card = {card}/>}/>
    </Routes> 
  </Router>
  );
}

export default App;
