import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="35"/>
      </div>
    );

    //This what eventually what gets compiled with JSX
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Hi, I am a React App!!!' ))
  }
}

export default App;
