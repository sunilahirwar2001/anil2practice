
   import React, { useEffect, useReducer } from 'react';

const initialState = {
  users: [],
  filteredUsers:[], // Separate array for filtered users
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        users: action.payload,
        filteredUsers: action.payload, // Initialize filtered users with all users
      };
    case "FILTER":
      const filterData = state.users.filter((user) => {
        return (
          user.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          user.username.toLowerCase().includes(action.payload.toLowerCase())
        );
      });

      return {
        ...state,
        filteredUsers: filterData,
      };

    default:
        return state;
  }
};

export default function UseReducersUseFilter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApi = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let result = await response.json();
    dispatch({ type: "SUCCESS", payload: result });
  };
         
               
  useEffect(() => {
    fetchApi();
  }, []);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    dispatch({ type: "FILTER", payload: searchTerm });
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter search here"
        onChange={handleChange}
      />
      <ul>
        {state.filteredUsers.map((item, index) => (
          <li key={index}>
            Name: {item.name}
            <br />
            User: {item.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
