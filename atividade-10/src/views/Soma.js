import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux"
// import { Container } from './styles';

function Soma() {
  const {num1,num2} = useSelector(state=>state)
  const [soma,setSoma] = useState(0)
  useEffect(()=>{
    setSoma(num1 + num2)
  },[num1,num2])
  return (
  <div style={{ width:"300px", height:"200px", background:"#719ece",textAlign:"center",color:"#fff"}}>
    <h1>soma</h1>
    {soma}
  </div>
  );
}

export default Soma;