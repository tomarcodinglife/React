
import React from 'react';

// This is a PureComponent because in this component use props and state properly for rendering

function PureComponent() {
  return (
    <div>
      <h1>Pure Component</h1>
        <div>
            <h3>Example 01</h3>
            <CounterFun Count={1}/>
            <CounterFun Count={2}/>
            <CounterFun Count={3}/>
            <CounterFun Count={4}/>
            <CounterFun Count={4}/>
        </div>
        <button onClick={CountUpdate}>Click</button>
    </div>
  );
}

function CounterFun ({Count}){
    let Counter = Count++
    return (<h1>Counter: {Counter} </h1>);
}

function CountUpdate ({Count}){
    return Count + 1;
}   

export default PureComponent;