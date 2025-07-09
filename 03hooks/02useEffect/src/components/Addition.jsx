function Addition({a, b}) {
//   const { a, b } = props;

  // Calculate the sum of a and b
  let num1 = Number(a);
    let num2 = Number(b);
  const sum = Number(num1 + num2);

  // Return the result as a JSX element
  return (
    <div>
      <h2>Addition Result</h2>
      <p>
        The sum of {a} and {b} is: <strong>{sum} </strong>
      </p>
    </div>
  );

}

export default Addition;