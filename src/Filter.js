import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Filter = () => {
  const[searchParams,setSearchParams] = useSearchParams();
  console.log(searchParams.get("age"));    
  console.log(searchParams.get("city"));  
   const age = searchParams.get("age");
   const city = searchParams.get("age");
  return (
     <div>
      <h3>Filter Age</h3>
      <h3>Age is :{age}</h3>
      <h3>Age is :{city}</h3>
    </div>
  )
}

export default Filter
