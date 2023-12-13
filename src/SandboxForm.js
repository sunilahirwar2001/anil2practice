const User=(props)=>{
    return (
      <form onSubmit={props.loginHandler}>
      <p>{props.name}</p>
     <input type='text' onChange={props.handleAddName} placeholder="Enter your name"/>
    <span>{props.nameError?<p>User not valid</p>:" "}</span>
      <input type='password'onChange={props.handleAddPassword} placeholder="Enter your Password"/>
      <span>{props.passwordError?<p>password not valid</p>:" "}</span>
    
          <button type='submit'>Click</button>
    
          </form>
    )
    
    }
    export default User;

    import "./styles.css";

import React, { useState } from "react";
import User from "./User";
export default function App() {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  localStorage.setItem("name", name);
  localStorage.setItem("password", password);
  const loginHandler = (e) => {
    e.preventDefault();
    const savedName = localStorage.getItem("name");
    const savedPassword = localStorage.getItem("password");
    if (name.length >= 3 && password.length >= 3) {
      console.log(name, password);
    } else {
      console.log("False");
    }
  };
  const handleAddName = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(item);
  };
  const handleAddPassword = (e) => {
    let data = e.target.value;

    if (data.length < 3) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(data);
  };

  return (
    <div className="App">
      <User
        name={name}
        password={password}
        nameError={nameError}
        passwordError={passwordError}
        handleAddName={handleAddName}
        handleAddPassword={handleAddPassword}
        loginHandler={loginHandler}
      />
    </div>
  );
}
