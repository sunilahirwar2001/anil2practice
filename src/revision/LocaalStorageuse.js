// import React, { useState, useEffect } from 'react';

//      const LocalStorageUse = () => {
//      const [name, setName] = useState("");
//      const [email, setEmail] = useState("");
//      const [list,setList] = useState([]);
     

//   // Load existing values from localStorage on component mount
//      useEffect(() => {
//     const storedName = localStorage.getItem('Name');
//     const storedEmail = localStorage.getItem('Email');
//     if (storedName) {
//        setName(storedName);
//     }
//     if (storedEmail) {
//       setEmail(storedEmail);
//     }
//   }, []);

//   const handleName = (event) => {
//     const newName = event.target.value;
//     setName(newName);
//     const store = name.trim();
//       if(store !==''){
//         setList((prev)=>[...prev,store]);
//     }
//     setName(" ");
  
//   }

//   const handleEmail = (event) => {
//     const newEmail = event.target.value;
//     setEmail(newEmail);
//   }

//         const handleCLick = () => {
//     // Save the updated values to localStorage
//     localStorage.setItem('Name', name);
//     localStorage.setItem('Email', email);
//     setName("");
//     setEmail("");
//   }

//   return (
//     <div>
//         <input type='text' placeholder='Enter your name' value={name} onChange={handleName} />
//         <input type='text' placeholder='Enter your email' value={email} onChange={handleEmail} />
//         <button onClick={handleCLick}>Save</button>
//     </div>
//   )
// }

// export default LocalStorageUse;



import React, { useState, useEffect } from 'react';

const LocalStorageUse = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [storedNames, setStoredNames] = useState([]);
  const [storedEmails, setStoredEmails] = useState([]);

  // Load existing values from localStorage on component mount
  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem('Names')) || [];
    const storedEmails = JSON.parse(localStorage.getItem('Emails')) || [];
    setStoredNames(storedNames);
    setStoredEmails(storedEmails);
  }, []);

  const handleName = (event) => {
    const newName = event.target.value;
    setName(newName);
  }

  const handleEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  const handleCLick = () => {
    // Add the new values to the state arrays
    setStoredNames([...storedNames, name]);
    setStoredEmails([...storedEmails, email]);

    // Save the updated arrays to localStorage
    localStorage.setItem('Names', JSON.stringify([...storedNames, name]));
    localStorage.setItem('Emails', JSON.stringify([...storedEmails, email]));
  }

  return (
    <div>
      <input type='text' placeholder='Enter your name' value={name} onChange={handleName} />
      <input type='text' placeholder='Enter your email' value={email} onChange={handleEmail} />
      <button onClick={handleCLick}>Save</button>

      <div>
        <h2>Stored Names:</h2>
        <ul>
          {storedNames.map((storedName, index) => (
            <li key={index}>{storedName}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Stored Emails:</h2>
        <ul>
          {storedEmails.map((storedEmail, index) => (
            <li key={index}>{storedEmail}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LocalStorageUse;
