import React,{useEffect,useState} from 'react';
function App(props){
 
 
  useEffect(()=>{
    console.warn("UseEffect",props.count);

    },[props.count,props.data]);

    return(
      <div>
        <h1>Count Props {props.count}</h1>
        <h1> data Props:{props.data}</h1>
       
    </div>
    )
}