import React from 'react';

let ToDo = ({ onClick, text, completed }) => {
    return (
        <li  onClick={onClick} style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
          {text}
        </li>      
    );

}

export default ToDo;