import React from 'react';
import ReactDOM from 'react-dom/client';


function Car(props){
    return <li>I am a {props.keys} = {props.brand}</li>;
}

function Garage(){
  const cars =[
    {id:1, brand:'Ford'},
    {id:2, brand:'BMW'},
    {id:3, brand:'Audi'}
  ];

  return(

    <>
    <h1>Who lives in my Garage?</h1>
    <ul>
      {cars.map((car)=><Car keys={car.id} brand={car.brand}/>)}
    </ul>
    </>
  );
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(<Garage/>);