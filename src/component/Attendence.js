import React from 'react'

function Attendencecheck()
{
  let t = document.getElementById("Total");
  let s = document.getElementById("present");
  let y = document.getElementById("re2");
  let y2 =(s.value/t.value)*100;
  y.innerText =`Your Attenddence percentage is ${y2}`;
console.log((s.value/t.value)*100);
 
}
function Attendence() {
  return (
    <>
    <div>Attendence</div>
    <p style={{margin: "20px"}}> PERSENT LECTURE </p>
    <input id='present'></input>
    <p style={{margin: "20px"}}>  TOTAL LECTURE </p>
    <input  id='Total'></input>
    <button type="button" className='btn btn-secondary my-4' onClick={Attendencecheck} >Calculate</button>
    <p id='re2' style={{width : "auto" , height : "auto"}}></p>
    </>
  )
}

export default Attendence