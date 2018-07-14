
/*

Special property called 'state' for components that extend "Component"

'state' is not available in function components

using 'state' needs to be done with care.

*****************
Very important.  When assigning a method to to call for a button click or event hanlder, do not include parenthesis.  Only put this.functionName as reference.

*/

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = 
  {

    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]

  }

  switchNameHandler = () =>
  {
      console.log('Was Clicked!');
  }
  render() 
  {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={ this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={ this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={ this.state.persons[2].age} />
      </div>
    );

    //This what eventually what gets compiled with JSX
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Hi, I am a React App!!!' ))
  }
}

export default App;
