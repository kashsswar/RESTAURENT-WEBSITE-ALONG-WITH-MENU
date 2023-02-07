import React from 'react'
import Restaurents from './component/Basics/Resturant'
import UseState from './component/Hooks/useState'
import UseEffect from './component/Hooks/useEffect'
import UseReduce from './component/Hooks/useReducer'

const App = () => {
  return (
    <div>
      <Restaurents/>
    </div>
  )
}

export default App





/*import React from 'react';       //rafce
import Restaurents from "./component/Basics/Restaurents";
//use can use <section></section> and MOST IMPORTANTLY
//<React.Fragment></React.Fragment> or JUST <></> instead of <div></div>
const App = () => {
  return (
    //we will use className instead of class in react
    //<div className="react">
    <>  
                          
      <h1 className="react">Welcome to Karishma World {3+7}</h1>
      <p>Awesome</p>
       <myName />
       <myName />
      
      <Restaurents/> 
    </>
  );
};
const mName=()=>{
  return 
    <h1>Karishma Sinsinwar</h1>
};

    //if u want to add attribute use camelCase
    //example: <p onClick ={alert}>Awesome</p>

/*const App = () => {
  return (
    <div>
      <h1>
      Welcome to Karishma World
      </h1>
    </div>
  )*/

/*const App=()=>{
    return React.createElement("div",{},
    React.createElement("h1",{},"Hello World");*/
/*const App=()=>{
  return React.createElement("h1",{},"Hello World");
}

export default App; */

