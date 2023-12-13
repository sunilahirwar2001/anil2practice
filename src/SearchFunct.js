// import React, { useEffect, useState } from 'react'

//     const SearchFunct = () => {
//     const [search,setSearch] = useState([]);
//     const [filterSearch,setFilterSearch] = useState([]);
//    async function FetchAPi(){
//     let data = await fetch ("https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes")
//     let result  = await data.json()
//   //  console.log(result);
//          setSearch(result);
//          setFilterSearch(filterSearch);

//    }
//    useEffect(()=>{
//     FetchAPi();
//    },[])

//        const debounce =(func,delay)=> { 
//         let timeoutId;
//         return function (...args) {
//           clearTimeout(timeoutId);
//           timeoutId = setTimeout(()=>func.apply(this,args),delay);
//         }

//   }
    
//  const handleSearch =  debounce((e)=>{ 
//   const textInput  = e.target.value.toLowerCase();
//    const filterData = search.filter((item)=>
//   item.title.toLowerCase().includes(textInput))
//  setFilterSearch(filterData);
// },3000);
//   return (
//     <div>  
//       <h1>Hi...</h1>  
// <input 
//   onChange={handleSearch}
// type='text' placeholder='Enter your name' />
// <ul>

//     {
//  filterSearch.map((item,index)=>(
//             <>
//             <li key={index}>{item.title}</li>
//             </>
//         ))
//     }
// </ul>
//     </div>
//   )
// }

// export default SearchFunct;


// import React, { useEffect, useState } from 'react';

// const SearchFunct = () => {
//   const [search, setSearch] = useState([]);
//   const [filterSearch, setFilterSearch] = useState([]);

//   async function FetchAPi() {
//     try {
//       let data = await fetch("https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes");
//       let result = await data.json();
//       setSearch(result);
//       setFilterSearch(result); // Corrected this line
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   useEffect(() => {
//     FetchAPi();
//   }, []);

//   const debounce = (func, delay) => {
//     let timeoutId;
//      return function (...args) {
//              clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => func.apply(this, args), delay);
//     };
//   };

//   const handleSearch = debounce((e) => {
//     const textInput = e.target.value.toLowerCase();
//     const filterData = search.filter((item) => item.title.toLowerCase().includes(textInput));
//     setFilterSearch(filterData);
//   }, 1000); // Changed debounce delay to 1000 milliseconds

//   return (
//     <div>
//       <h1>Hi...</h1>
//       <input onChange={(e) => handleSearch(e)} type="text" placeholder="Enter your name" />
//       <ul>
//         {filterSearch.map((item, index) => (
//           <li key={index}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchFunct;




 import React, { useEffect, useState } from 'react';
 const SearchFunct = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
   useEffect(()=> {
      const saveList = JSON.parse(localStorage.getItem('list')) || [];
        setList(saveList);
},[]);
  useEffect(()=>{
  localStorage.setItem('list',JSON.stringify(list));

},[list]);



    const handleClick = () => {
    if(name !=='' && email !== ''){
    if (editIndex !== null ) {
      // Update existing item
       const updatedList = [...list];
      updatedList[editIndex] = { name, email };
      setList(updatedList);
      setEditIndex(null);
    }
     else {
      // Add new item
      const newItem = { name, email };
      setList((prev) => [...prev, newItem]);
    }
  }
    // Clear input fields
    setName('');
    setEmail('');
    console.log(name);
  };
      const handleDelete = (index) => {
      const updatedList = list.filter((item, i) => i !== index);
      setList(updatedList);
  };
  const handleEdit = (index) => {
    // Set the item at the given index for editing
    const itemToEdit = list[index];
    setName(itemToEdit.name);
    setEmail(itemToEdit.email);
    setEditIndex(index);
  };
      

  
  return (
    <div>
      <label>Name</label>
      <input type='text' value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
      <label>Email</label>
      <input type='text' value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleClick}>Click</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>  
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
};

export default SearchFunct;
