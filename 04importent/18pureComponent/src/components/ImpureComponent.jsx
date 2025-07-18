

let Count = 0; // this is a global variable and it will be used in the inside component and change value so it is impure

function ImpureComponent() {
  return (
    <div>
      <h1>Pure Component</h1>
        <div>
            <h3>Example 01</h3>
            <CounterFun/>
            <CounterFun/>
            <CounterFun/>
            <CounterFun/>
        </div>
    </div>
  );
}

function CounterFun (){
    let Counter = Count+2
    return (<h1>Counter: {Counter} </h1>);
}
export default ImpureComponent;