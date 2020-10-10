import React from 'react';
import { useDispatch } from 'react-redux';

import {setNum1,setNum2} from  "../store/actions/calc"

// import { Container } from './styles';

function InputNumbers() { 
  const dispatch = useDispatch();

  return <div style={{marginBottom:50}}>
    <form>
      <input type="text" onChange={e=>dispatch(setNum1(e.target.value))} placeholder="Numero 1"/>
      <input type="text" onChange={e=>dispatch(setNum2(e.target.value))} placeholder="Numero 2"/>
    </form>
  </div>;
}

export default InputNumbers;