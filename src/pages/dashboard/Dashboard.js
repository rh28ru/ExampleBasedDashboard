import React from "react"

function createArray() { 
  const Array = [];
  for (let index = 0; index < 100; index++) {
    Array.push(index);
  }
  return Array;
};

export default function Dashboard() {
  return (
    <div>
      <h1 >  Dashboard Page.....</h1>
      { createArray().map(i=>( <div key={i}>{i}</div>)) }
        
      
    </div>
  )
}