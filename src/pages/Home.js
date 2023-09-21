import { useEffect,useState} from "react";
import React from 'react'
import axios from "axios";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Spinner from "../assets/spinner.svg"

const Home = ({setCard,isAuth,setIsAuth}) => {
  const [info,setInfo] = useState([])

  useEffect(() => {
    const getData = async () => {
      let { data } = await axios('https://fakestoreapi.com/products')
    setInfo(data);
    }
    getData()
  }, [])

  return (
  <main className="home">
<div className="container"> 
{info[0] 
?<div className="home__wrapper">

{
  info.map((info,idx) => (
<Card key = {idx} img = {info.image} title = {info.title} desc ={info.description} id = {info.id} setCard = {setCard}/>
  ))
}
</div> : <div className="spinner__img"> <img src={Spinner} alt="spinner"/></div>}
</div>
</main>


  )
}

export default Home