import React from 'react';


const Todo = props => {

  return (
    <div className="smurf">
        <h2>{props.name}</h2>
        <h3>{props.age}</h3>
        <p>{props.height}</p>
    </div>
  );
};

export default Todo;