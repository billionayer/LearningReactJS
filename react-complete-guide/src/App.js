/*

Special property called 'state' for components that extend "Component"

'state' is not available in function components

using 'state' needs to be done with care.

*****************
Very important.  When assigning a method to to call for a button click or event hanlder, do not include parenthesis.  Only put this.functionName as reference.

Supported Events can be found at:

https://reactjs.org/docs/events.html#supported-events


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
    ],
    otherState: 'some other value'

  }

  switchNameHandler = (newName) =>
  {
      //console.log('Was Clicked!');
      //DON'T DO THIS: this.state.persons[1].name = 'Maximilian';
      this.setState(

        {
          persons: [
            {name: newName, age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: Math.floor(Math.random() * 30)}
          ]
        }
      );
  }


  newChangedHandler = (event) =>
  {
      //console.log('Was Clicked!');
      //DON'T DO THIS: this.state.persons[1].name = 'Maximilian';
      this.setState(

        {
          persons: [
            {name: 'Max', age: 28},
            {name: event.target.value, age: 29},
            {name: 'Stephanie', age: Math.floor(Math.random() * 30)}
          ]
        }
      );
  }




  render() 
  {
      //Use inline style to scope
      const style = {
        backgroundColor: 'red',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      return (
        <div className="App">
          <h1>Hi, I am a React App</h1>
          <p>This is really working!</p>
          {/*Not recommended because of performance issue*/}
          <button
              style={style}
              onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
          <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
          />
          
          <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.newChangedHandler}
          > My Hobbies: Racing</Person> {/*Wiring the click event as a prop allows me to execute in a different component*/}
          
          <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} 
          />
        </div>
      );

    //This what eventually what gets compiled with JSX
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Hi, I am a React App!!!' ))
  }
}

export default App;
