import * as React from 'react';
import './style.css';

export default function App() {
  function sum(){
    var a=prompt("enter the 1nd no")
    var b=prompt("enter th 2nd no")
    var sum=a+b
    console.log(sum)
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <title>Bulbul</title>
      <button onClick={sum}>click</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
