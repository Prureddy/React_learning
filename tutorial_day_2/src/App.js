
import './App.css';
//import {User} from './User.js'
import {planets} from './Planet.js'

function App() {
  //****************** 
  //const age = 2 ;
  //const isGreen = true;
  // if(age>=18){
  //   return <div className='App'>Above age</div>
  // }
  // else{
  //   return <div className='App'>Below age</div>
  // }
  /************************** 

  return (
    <div className='App'>
    {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
    <h1 style={{color: isGreen ? "green" : "red"}}>Hey I have Color</h1>
    {isGreen && <button>This is button</button>}
    </div>
  );
  */


 /* Arrays */  
  // const names = ["Pruthvi s","Peter k", "Jessica A","Alan walker"];
  //      //return<div className='App'><h1>{names[0]}</h1></div>
  // return(
  //      <div className="App">
  //   {names.map((name,key) => {
  //     return <h1 key = {key} > {name} </h1>
  //   })}
  //   </div>
  // );

  // const users = [
  //   { name : "pruthvi S", age : 20},
  //   { name : "peter k", age : 30},
  //   { name : "patel", age : 40},
  // ];

  // return(
  //   <div className = "App">
  //     {users.map((user,key) =>{
  //        return <User name = {user.name}  age = {user.age}/>

  //   })}

  //   </div>
  // );

  /************************Assignment************************* */

  
  return(
    <div className='App'>
      {planets.map(
        (planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1>

      )}
    </div>

  );
  
  }


export default App;
