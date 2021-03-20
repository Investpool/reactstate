import logo from './logo.svg';
import './App.css';
import {Component, useState} from "react";


/*class App extends Component{
  constructor() {
    super();
    this.state = { age: 20};
  }

handleClick = ()=>{
 //console.log("button clicked")
 let newAge = this.state.age + 1;
 this.setState({age:newAge});
  };

render() {
    return(
    <div>
      <h1> Age is {this.state.age}</h1>
      <button onClick={this.handleClick}>Click me !!!</button>
    </div>
    );
  }
}*/


function App() {

  const [state, setState] = useState({age: 20})

const handleClick =() =>{
  let newAge = state.age + 30;
  setState({ age: newAge});
  /*console.log ("button Clicked");*/
};

  return (
    <div>
      <h1>Age is {state.age}</h1>
      <button onClick={handleClick}>Click me!!!</button>
    </div>
  );
}








export default App;


