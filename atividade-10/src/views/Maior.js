import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux"
// import { Container } from './styles';

function Maior() {
  const {num1,num2} = useSelector(state=>state)
  const [maior,setMaior] = useState(0)
  useEffect(()=>{
    setMaior(Math.max(num1,num2))
  },[num1,num2])
  return (
  <div style={{ width:"300px", height:"200px", background:"#719ece",textAlign:"center",color:"#fff"}}>
    <h1>maior</h1>
    {maior}
  </div>
  );
}

export default Maior;