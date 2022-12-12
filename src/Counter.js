import React, { useState, useEffect } from 'react';

function Counter() {

  const [counter, setCounter] = useState(0);
  const [hidden, setHidden] = useState(false);

/*
  //'useEffect' example #1
  useEffect(() => {
    console.log("effect!");
    document.title = counter;
  }, [counter]);  //Runs the effect IFF (if and only if) 'counter' changes.


  //'useEffect' example #2
  useEffect(() => {
    console.log("effect!");
    document.title = counter;
  }, []);  //The empty Dependency Array means that the effect runs only once. 
*/

  return (
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{counter}</h1>}
      <button onClick={() => setCounter(counter + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter; 