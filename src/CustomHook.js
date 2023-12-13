import React, { useState } from 'react';   
function UserInput(initialValue) {
  const [userValue, setUserValue] = useState();
  
  const handleChange = (e) =>  {
        setUserValue(e.target.value);
}

  return {
    userValue,
    onChange: handleChange,
  };
}
 const CustomHook = () => {
  const name = UserInput('');
  const email = UserInput('');

  return (
    <div>
         <input {...name} placeholder='Please Enter your name' />
         <input {...email} placeholder='Please Enter your email' />
         <p>Name: {name.userValue}</p>
         <p>Email: {email.userValue}</p>
         </div>
  );
}

export default CustomHook;
