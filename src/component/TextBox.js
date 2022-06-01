import React from "react";

function cal() {
  // console.log("HIII");
  let a = document.getElementById("mark");
  let  t = (a.value - 0.75) * 10;
  let r = document.getElementById("re");
  r.innerText =`Your Percentage is ${t}`;
}
function pred()
{
  let s = document.getElementById("sem");
  let k = document.getElementById("E");
  let ag = document.getElementById("aggeri");
  let s1 = parseInt(s.value,10);
  let sum = s.value *ag.value;
  let x = (s1+1) * k.value -sum ; 
// console.log("finally x == "+x.toPrecision(3));
let re = document.getElementById("exp");

if(x<10)
  re.innerText =`Expected CGP is ${x.toPrecision(3)} in semester ${s1+1}`;
else
  re.innerText = `Expected CGP is ${x.toPrecision(3)}      Not possible to score more than 10 `;
}

function TextBox() {
  return (
    <>
      <p> ENTER THE CGP</p>
      <input id="mark" style ={{textAlign : "center"}} ></input>
      <button type="button" className="btn btn-secondary my-4" onClick={cal}>
        Calculate
      </button>
      <p style={{width :"500px" , height : "50px"}} id ="re"></p>
      <p>Enter the semester completed</p>
      <input id ="sem" type={"number"} style ={{textAlign : "center"}} ></input>
      <p>Enter the Aggergation mark</p>
      <input id="aggeri" style ={{textAlign : "center"}}  ></input>
      <p>Enter the expected CGP</p>
      <input id="E" style ={{textAlign : "center"}} ></input>
      <button type="button" className="btn btn-secondary my-4" onClick={pred}>
        Calculate
      </button>
      <p id ="exp"></p>
    </>
  );
}

export default TextBox;
