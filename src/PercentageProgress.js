import React, { useEffect, useState } from 'react'
import './PercentageProgress.css'
const PercentageProgress = () => {
    
  const [running,setRunning] = useState(0); 
  const [filled,setFilled] = useState(0);

    useEffect(()=> {
    
      if(filled<100 && running){
        setTimeout(()=>setFilled(prev=>prev+=2),50) 
    }
    }, [filled,running]) 
  return (
    <div className='progress-bar'>
       <div className={{
        height:"100%",
        width:`${filled}`,
        transition:"width 0.5s"}}
       ></div>
       <span className='progressPercent'>{filled}%</span>
         <button className='btn' onClick={()=>setRunning(true)}>Run</button>
    </div>
  )
}

export default PercentageProgress
