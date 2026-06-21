import React from "react";
import { useState } from "react";
const App = () => {
  let [counter, setCounter] = useState(0);

  // let counter = 1; we don't need this if we have above code

  const addValue = () => {
    console.log("Value Added", counter);

    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    console.log("Value REmoved", counter);
    if (counter > 0) {
      counter -= 1;
    }
    setCounter(counter); // this means tell me what new value to put
    // or direct setCounter(counter +1)
  };

  // console is priting the righ calculation but the page isn't showing the updated version

  // problem is updating the UI
  // react reacts to variables on updation ( ui control)
  // to control this updation of data we use hooks

  return (
    <>
      <h2>Let's learn hooks </h2>
      <h2>counter value : {counter} </h2>
      <button
        onClick={addValue}
        // we are passing a reference of our method if
        // we give addValue() it will run automatically instead of onclick
        // hence addValue and not addValue()
      >
        Add Value {counter}
      </button>
      <br /> <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
};

export default App;
