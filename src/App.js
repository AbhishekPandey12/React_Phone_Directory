import React, { Component } from 'react';
import Header from "./Header";

class App extends Component {
  render(){
    let x = 1;
    let y = 2;
    return (
      <div>
        <Header/>
        <button> Add </button>
        <div>
          <span> Name </span><br/>
          <span> Phone </span>
        </div> 
        <label htmlFor="name"> Name: </label>
        <input id="name" type="text" placeholder="Type Here" defaultValue={x+y}></input>
      </div>
    );
  }
}

export default App;
