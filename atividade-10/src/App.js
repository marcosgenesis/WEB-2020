import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import calc from  "./store/reducers/calc"

import InputNumbers from "./views/InputNumbers"
import Soma from "./views/Soma"
import Maior from "./views/Maior"
import Multiplicacao from "./views/Multiplicacao"

export const store = createStore(calc);

function App() {
  return (
    <Provider store={store}>
        <InputNumbers/>
        <div style={{display:"flex",width:"50%",justifyContent:"space-between"}}>
          <Maior/>
          <Soma/>
          <Multiplicacao/>
        </div>
    </Provider>
  );
}

export default App;
