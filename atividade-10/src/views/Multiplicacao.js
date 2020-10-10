import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux"
// import { Container } from './styles';

function Multplicacao() {
  const {num1,num2} = useSelector(state=>state)
  const [multiplicacao,setMultiplicacao] = useState()
  useEffect(()=>{
    setMultiplicacao(num1 * num2)
  },[num1,num2])
  return (
  <div style={{ width:"300px", height:"200px", background:"#719ece",textAlign:"center",color:"#fff"}}>
    <h1>multiplicacao</h1>
    {multiplicacao}
  </div>
  );
}

export default Multplicacao;