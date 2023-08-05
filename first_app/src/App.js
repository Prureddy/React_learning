
import './App.css';

function App() {
  
  return (<div className="App">
   <User name="Pruthvi S " age={20} email ="pruthvi@pru.com" />
   <User name="Alex  " age={20} email ="Alex@sandy.com"/>
   <User name="Jessica " age={20} email ="Jessica@chan.com" />
   <User name="David" age={20} email ="david@jevin.com"/>
   <User />
    </div>
  );    
} 

const User = (props) => {
  return (
    <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
     </div>
  );

};

export default App;
