import './App.css';
import {useState} from "react";

function App() {
  //  const [showText, setShowText] = useState(true);
  const [count, setCount] = useState(0);

  //  const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  //  };

  const increaseValue = () => {
    setCount(count + 1);
  };

  const decreaseValue = () => {
    setCount(count - 1);
  };

  const setZero = () => {
    setCount(0);
  }
  
  return (
    <div className="App">
      {/* {age}
      <button onClick={increaseAge}>Increase Age</button> */}
      {/* <input type='text' onChange={handleInputChange}/>
      {inputValue} */}
      {/* <button onClick={ () =>{settextColor(textColor === "black" ? "red" : "black")}}>Show/Hide</button>
      <h1 style={{color: textColor}}>HI there this Pruthvi S</h1> */}
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <button onClick={setZero}>Set to Zero</button>
      {count}
      
    </div>
  );
}

export default App;
