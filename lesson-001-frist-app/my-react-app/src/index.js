import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './car.js';

function Grage(props){
  return(
    <>
      <h1>Who live in my Grage?</h1>
      <Car color ="green"/>
    </>
  )
}


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(<Grage/>);