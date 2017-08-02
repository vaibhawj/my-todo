import React, { Component } from 'react';
import './App.css';
import AddToDo from '../containers/AddToDo';
import ToDoList from './ToDoList'

class App extends Component {
  render() {
    return (
      <div className="App">
       <AddToDo/>
       <ToDoList/>
      </div>
    );
  }
}

export default App;
