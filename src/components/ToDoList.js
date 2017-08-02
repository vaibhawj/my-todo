import React from 'react';
import ToDo from './ToDo';
import {connect} from 'react-redux';
import { toggleTodo } from '../actions'

let ToDoList = ({todos = [], onToDoClick}) => {
    return (
           <ul>
               { 
                   todos.map(todo => {
                   return (
                       <ToDo key={todo.id} {...todo} onClick={() => {
                       onToDoClick(todo.id)
                       }}/>
                   );
               })

               }
           </ul>     
    );
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToDoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

ToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default ToDoList;