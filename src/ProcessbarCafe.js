import React, { useEffect, useState } from 'react'
import './ProgressBar.css';

const ProcessbarCafe = () => {

    const [progress,setProgress] = useState(0);
  
    useEffect(()=> {
   const interval = setInterval(()=> {
           setProgress(progress+5)
           
    },1000)
   return ()=>clearInterval(interval);
    },[progress])
   

  return (
    <div  className = 'progress-bar'>
    <div className='filler'
      
           style={{width:`${progress}%`}}
    >

    </div>
       
    </div>
  )
}

export default ProcessbarCafe
