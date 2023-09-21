import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useState, useEffect } from "react";
import Basket from "./components/Basket";
import Modal from "./components/Modal";


function App() {
  const [card, setCard] = useState(0)
  const [isAuth, setIsAuth] = useState("")
  const [products, setProducts] = useState([])
  // useEffect(() => {
  //   const products = JSON.parse(localStorage.getItem("products"))
  //   if (products) {
  //     setProducts(products)
  //   }
  // }, [])
  if (isAuth){
    return (
<div>
    <Router>
      <Header   />
      <Routes>
        <Route path="/" element={<Home setIsAuth={setIsAuth} setCard={setCard} isAuth={isAuth}  />} />
        <Route path="/details" element={<Details card={card} />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Modal setIsAuth={setIsAuth}/>} />


      </Routes>
    </Router>
    </div>
    )
    }
    else {
      return (<Modal setIsAuth={setIsAuth}/>)
     }
  
}

export default App;
