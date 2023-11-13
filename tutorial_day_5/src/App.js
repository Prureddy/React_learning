import './App.css';
import {useState} from 'react';

function NumCount() {
  const [count, setCount] = useState(0);

  function handleClicks(){
    setCount(count + 1);
  }

  return (
    <button onClick={handleClicks}>Clicked {count} times</button>
  );
}

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      I'm a Button
    </button>
  );
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

function MyApp() {
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return (
    <div className="App">
      <h1>Welcome to My app</h1>
      <MyButton />
      <ul>{listItems}</ul>
      <NumCount />
    </div>
  );
}

export default MyApp;
