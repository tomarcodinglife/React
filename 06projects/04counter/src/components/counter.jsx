import React from "react";



function Counter (){

    let [counter, setCounter] = React.useState(0);

    function addValue() {
        if (counter >= 20) {
            alert("Counter cannot be greater than 20");
            return;
        }else{
           setCounter(counter + 1);
        }
        
    }

    function removeValue() {
        if (counter > 0) {
            setCounter(counter - 1);
        }else {
            alert("Counter cannot be less than zero");
        }
    }


    return(
        <div>
            <h1>Counter Project</h1>
            <h2>Current Counter Value {counter}</h2>
            <button onClick={addValue}>Increment {counter}</button>
            <button onClick={removeValue}>Decrement {counter}</button>
        </div>

    )
}

export default Counter;