//import logo from './logo.svg';
//import React, { Component } from 'react';
// // import SampleRoute from './SampleRoute';
// import User from './User';


//Mounting Method

// function App() {
//   const[name,setName]= React.useState("anil");
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Render Mehod in react</h1>
//         <h1>App component</h1>

//      <User name={name}/>
//      <button onClick={()=>setName("sindhu")}>Update</button>
//       </header>
//     </div>
//   );
// }
// export default App;
// import React, { useEffect } from 'react';

// function MyComponent() {
//   useEffect(() => {
//     console.log('useEffect called');
//     return () => console.log('componentWillUnmount called');
//   }, []);

//   return <div>Hello, World!</div>;
// }

// export default MyComponent;

// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default MyComponent;



//DidMounting Method 
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     console.warn("constructor")
//     this.state={name:"anil"}
//   }
//   componentDidMount()
//   {
//     console.warn("componentDidMount")

//   }
//   render()
//   {
//     console.warn("render")

//     return (
//       <div className="App">
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button onClick={()=>this.setState({name:"Sidhu"})}>Update</button>
//       </div>
//     );
//   }
// }
// export default App;


////COMPONENTIDUPDATE METHOD USED IN REACT

//  class App extends React.Component{
//   constructor(){
//     super();
//     console.warn("constructer");
//     this.state={
//     //  name:"anil"
//     count:0
//     }

//   }
//   componentDidUpdate(preProps,prestate,snapshot){
//     console.warn("componentDidUpdate",prestate.count,this.state.count);
//   }
//   render(){
//     return(
//       <div>
//         <h1>Componet did Update</h1>
//         <button onClick={this.setState({count:this.state.count+1})}>DidUpdate</button>
//       </div>
//     )
//   }


//  }



//SHOULD COMPUNDDIDuPDATE METHOD
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }
//   shouldComponentUpdate(){
//     console.warn("shouldComponentUpdate",this.state.count);
//     if(this.state.count<5 ){
//     // && this.state.count>10)  
//       return true;
//     }
//   }
//   render(){
//   return(
//     <div>
//     <h1>shouldComponentUpdate{this.state.count}</h1>
//     <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
//     </div>
//   )
//   }
// }
// export default App;


//ComponentWIllunMound

// import Student from './Student'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         {
//           this.state.show?<Student />
//           :<h4>Component is removed</h4>
//         }
//         <button onClick={()=>this.setState({show:false})}> Toogle Student Component</button>
//       </div>
//     )
//   }
// }

// export default App


//HOOKS IMPORTANT
// import React,{useState}from 'react';
// function App(){
//   const [data,setData]=useState("anil");
//   return(
//     <div>
//       <h1 value ={data}> Hooks {data}</h1>
//       <button value ={data} onClick={()=>setData("sindhu")}>Update</button>
//     </div>
//   )
// }
// export default App;

//USEeFFECT hOOKS
//bina kisi condition ke use   count+1 karne se number badne start ho jayegi


// import React,{useEffect,useState} from 'react';
// function App(){
//  const[count,setCount]=useState(0);
//   useEffect(()=>{
//      console.warn("useEffect");

//     });
//     return(
//       <div>
//         <h1>UseEffect in react{count}</h1>
//         <button onClickCapture={()=>setCount(count+1)}>Update Counter</button>  

//     </div>
//     )
// }
//  export default App;

//USEeFFECT hOOKS
// State and props ko update hone se rokna


// import React,{useEffect,useState} from 'react';
// function App(){
//   const [data,setData]=useState(10);
//  const[count,setCount]=useState(100);

//   useEffect(()=>{
//     console.warn("called with fdata State");

//     },[data]);
//     useEffect(()=>{
//       console.warn("called with Count State");

//       },[count]);
//     return(
//       <div>
//         <h1>UseEffect in react{count}</h1>
//         <h1> data:{data}</h1>
//         <button onClickCapture={()=>setCount(count+1)}>Update Counter</button>  

//         <button onClickCapture={()=>setData(data+1)}>Update Data</button>  

//     </div>
//     )
// }
//export default App;


//Props Used  
//mera programm run nhi ho raha h


// import React,{useEffect,useState} from 'react';
// import UseEffectProp from './UseEffectProp'
//   const [data,setData]=useState(10);
//  const[count,setCount]=useState(100);
//     return(
//       <div>
//         <UseEffectProp data={data}/>
//         <UseEffectProp count={count}/>
//         {/* <h1>UseEffect in react{count}</h1>
//         <h1> data:{data}</h1> */}

//     </div>
//     )

//COLOR USE IN REACT
// import './style.css';
// import style from './custom.module.css'
// function App(){

//   return(
//     <div>
//       <h1 className='primary'>Style type  1 in class </h1>
//       <h1 style={{color:'red',backgroundColor:'blue'}} >Style type 2 in inline Style use</h1>
//       <h1 className ={style.success}>Style type  3 in Module</h1>

//     </div>
//   )
// }
// export default App;


//bOOTSTRAP USE IN REACTZ

 



 

// import {Table} from 'react-bootstrap'
// function App() {
//   const users = [
//     { name: 'Anil', email: 'anil@test.com', contact: '111' },
//     { name: 'Burce', email: 'bruce@test.com', contact: '222' },
//     { name: 'Peter', email: 'peter@test.com', contact: '111' },
//     { name: 'Sam', email: 'sam@test.com', contact: '777' },
//   ]
//   return (
//     <div className="App">
//       <h1>List With Bootstrap Table</h1>
//       <Table striped variant="dark" border={1}  >
//         <tbody>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Contacts</td>
//         </tr>
//         {
//           users.map((item,i)=>
//           item.contact==='111'?
//           <tr key={i}>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//         <td>{item.contact}</td>
//         </tr>:null
//           )
//         }
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default App
//REACT FRAGMENT IN REACT

// import Fraguse from './Fraguse'
// function App(){

//   return(
//      <div>
//     <h1>sunil ahirwar</h1>
//     <h2>This is a good communication skills</h2>
//     <Fraguse/>
//     </div>
//   )
// }
// export default App


//pure component -rerendering rokta h ,same h-to rokeda,nhi h re render karega
// import React from 'react';
// import Counter from './Counter';
// class  App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       count:1
//     }
//   }
//  render()
//  {
//   return (
//     <div className="App">
//      <Counter count={this.state.count} />
//       <button 
//       onClick={()=>{this.setState({count:this.state.count+1})}}
//       >Update Count</button>
//     </div>
//   );
//  }
// }

// export default App;
// import Person from './Person'
//  import React from 'react'
 
//  const App = () => {
//    return (
//      <div>
//       <Person/>
       
//      </div>
//    )
//  }
 
//  export default App
// import React from 'react';
// import User1 from './User1';
// const users = [
//   {
//     name: 'Anil', email: 'anil@test.com', address: [
//       { hm: '101', city: 'Noida', country: 'India' },
//       { hm: '10', city: 'Gurgaon', country: 'India' },
//       { hm: '23', city: 'Noida', country: 'India' },
//       { hm: '45', city: 'Delhi', country: 'India' },
//     ]
//   },
//   {
//     name: 'Burce', email: 'bruce@test.com', address: [
//       { hm: '101', city: 'Noida', country: 'India' },
//       { hm: '10', city: 'Gurgaon', country: 'India' },
//       { hm: '23', city: 'Noida', country: 'India' },
//       { hm: '45', city: 'Delhi', country: 'India' },
//     ]
//   },
//   {
//     name: 'Peter', email: 'peter@test.com', address: [
//       { hm: '101', city: 'Noida', country: 'India' },
//       { hm: '10', city: 'Gurgaon', country: 'India' },
//       { hm: '23', city: 'Noida', country: 'India' },
//       { hm: '45', city: 'Delhi', country: 'India' },
//     ]
//   },
//   {
//     name: 'Sam', email: 'sam@test.com', address: [
//       { hm: '101', city: 'Noida', country: 'India' },
//       { hm: '10', city: 'Gurgaon', country: 'India' },
//       { hm: '23', city: 'Noida', country: 'India' },
//       { hm: '45', city: 'Delhi', country: 'India' },
//     ]
//   },
// ];

// function App() {
//   return (
//     <div className="App">
//       {users.map((user, index) => (
//         <div key={index}>
//           <p>{user.name}</p>
//           <p>{user.email}</p>
//           {user.address.map((address, addrIndex) => (
//             <div key={addrIndex}>
//               <p>{address.hm}</p>
//               <p>{address.city}</p>
//               <p>{address.country}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;



  
  // const App = () => {
  //   return (
  //     <div>
  //       {
  //         users.map((item,i)=>(
  //          <User1 data={item} />
  //         ))
  //       }
  //     </div>
  //   )
  // }
  
  // export default App
  
//   import React ,{useState}from 'react'
// import ChildComponent from './ChildComponent';
//   const App = () => {
         
//          const[dataFromChild,setDataFromChild]= useState("");
   
//          const receiveDataFromChild = (data) => {
//           setDataFromChild(data);
//         }
//     return (
//       <div>
//         <h1>Data from child : {dataFromChild}</h1>
//         <ChildComponent  sendDataToParent = {receiveDataFromChild} />
//       </div>
//     )
//   }
  
//   export default App
  
  
// import React from 'react'
// import ChildComponent from './ChildComponent'

// const App = () => {
   
//   const parentAlert = (data)=>{
//    alert(data.name);


//   }

//   return (
//     <div>
//        <ChildComponent alert={parentAlert} />
//     </div>
//   )
// }

// export default App




// USEMEMO in hook used
// import React,{useState,useMemo} from 'react';

// function App(){
//   const[count,setCount]=useState(0);
//   const[item,setItem]=useState(10);
//  const multiCountDemo=  useMemo(function multiCount() {
//   console.warn("multicount");
//   return count*5;


//  },[count])


//   return(
//     <div>
//       <h1>Use memo used in hook</h1>
//        <h1>count:{count}</h1>
//        <h1>item:{item}</h1>
//        <h3>multicountcall{multiCountDemo}</h3>
//        <button onClick={()=>setCount(count+1)}>Count</button>
//        <button onClick={()=>setItem(item+1)}>Item</button>
//     </div>
//   )
// }
// export default App;

// import React, { useState, useMemo } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   const expensiveCalculation = useMemo(() => {
//     // perform expensive calculation here
//     let result = 0;
//     for(let i = 0; i < count * 2; i++) {
//       result += i;
//     }
//     return result;
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Expensive calculation: {expensiveCalculation}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default App;


//USEREF -color,value,ets handle with useRef
//   import React,{useRef} from 'react';
//       function App() {
//  let inputRef = useRef (null);
//   function  HandleInput () {
//     // console.warn("function call");
//     inputRef.current.value = '1000';
//      inputRef.current.style.color='red';
//   }

//   return(
//     <div>
//     <h1>Use Ref used</h1>
//     <input type='text'  ref={inputRef}/>
//     <button onClick={HandleInput}>HandleInput</button>
//     </div>
//   )
// }
// export default App;

//FORWARD REF--
// import React ,{useRef} from 'react'
// import UserForward from './UserForward'
// function App() {
//   let inputRef =  useRef(null)
//   function updateInput()
//   {
//     inputRef.current.value="No";
//     inputRef.current.style.color="red"
//     inputRef.current.focus()


//   }
//   return (
//     <div className="App">
//       <h1>forwardRef in React </h1>
//       <UserForward ref={inputRef} />
//       <button onClick={updateInput} >Update Input Box</button>
//     </div>
//   );

// }
// export default App;


//CONTROLLED COMPONENT-val lagake controol kiya h
// import React,{useState} from 'react';
// function App(){
//   let[val,setVal]=useState("");
//   let[name,setName]=useState("");
//   return(
//     <div>
//       <h1>Controll Component</h1>
//       <input type='text'value={val} onChange={(e)=>setVal(e.target.value)} />
//   <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
//   <h3>name{name}</h3>
//    <h3>Value{val}</h3>
//     </div>
//   );
// }
// export default App;
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Submitted name: ${name}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text"  onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;


//UNCONTROLLED COMPONENT
// import React,{useRef} from 'react';
// function App(){
//   let inputRef=useRef(null);
// let inputRef2=useRef(null);

//   function submitForm(e){
//     e.preventDefault()
//     console.warn("input field 1 value:",inputRef.current.value);
//     console.wa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           rn("input field 2 value:",inputRef2.current.value);
//     let input3=document.getElementById('input3').value;
//     console.warn("input field 3 value:",input3);
//   }

//   return(
//     <div> 
//       <h1>Uncontrolled Component</h1>
//       <form onSubmit={submitForm}>
//       <input type='text' ref={inputRef} /><br/><br/>
//       <input type='text' ref={inputRef2} /><br/><br/>
//       <input type='text'id='input3'/>
//       <button>Sumbit</button>
//       </form>
//     </div>
//   )
// }
// export default App;
// import React, { useRef, useState } from 'react'
// function App() {
//   return (
//     <div className="App">
//       <h1>HOC </h1>
//       <HOCRed cmp={Counter} />
//       <HOCGreen cmp={Counter} />
//       <HOCBlue cmp={Counter} />

//     </div>
//   );
// }
// function HOCRed(props)
// {
//   return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>
// }
// function HOCGreen(props)
// {
//   return <h2 style={{backgroundColor:'green',width:100}}>Grren<props.cmp /></h2>
// }
// function HOCBlue(props)
// {
//   return <h2 style={{backgroundColor:'blue',width:100}}>blue <props.cmp /></h2>
// }
// function Counter()
// {
//   const [count,setCount]=useState(0)
//   return<div>
//     <h3>{count}</h3>
//     <button onClick={()=>setCount(count+1)}>Update</button>
//   </div>
// }



// export default App;





// import React, { useEffect } from 'react'

// const App = () => {

//   const[model,setModel]=useEffect(false);

//    const Mymodel=()=>{
//     return(
//       <>
//       <h2>Stay tunned</h2>
//       <p> The stock market is a very tedious task to understand, and more difficult is to operate its application and track your stock.
// - We will create a dashboard where you can add stocks based on their symbols and on the type of data you want.</p>
//      <button onClick={()=>{
//       setModel(false)
//      }}>Accept it</button>
//       </>
//     )
//    }
//   return (
//     <div>

//       <button onClick={()=>{
//         setModel
//       }}>Open model</button>
//     { setModel && <Mymodel/>  }
//     </div>
//   )
// }

// export default App;


// import React from 'react';  
// import './App.css';  
// import { Button,Modal} from 'react-bootstrap';  
// import PaymentForm from './PaymentForm';
// class App extends React.Component {  
//   constructor(){  
//     super();  
//     this.state={  
//       show:false  
//     }  
//   }  
//   handleModal(){  
//     this.setState({show:!this.state.show})  
//   }  
//   render(){  
//     return (  
//       <div>  
//         <h2 align='center'>Payment</h2>  
//         <div className="modalClass">  
//           <Button onClick={()=>this.handleModal()}>Click To Open Modal</Button>  
//         </div>  
//           <div>
//             <PaymentForm/>
//           </div>
//         <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
//           <Modal.Header closeButton>This is a Modal Heading</Modal.Header>  
//           <Modal.Body>This is a Modal Body</Modal.Body>  
//           <Modal.Footer>  
//             <Button onClick={()=>this.handleModal()}>Close</Button>  
//             <Button onClick={()=>this.handleModal()}>Save</Button>  
//           </Modal.Footer>  
//         </Modal>  
//       </div>  
//     )  
//   }  
// }  
// export default App;  





// import React from 'react';  
// import './App.css';  
// import { Button,Modal} from 'react-bootstrap';  
// class App extends React.Component {  
//   constructor(){  
//     super();  
//     this.state={  
//       show:false  
//     }  
//   }  
//   handleModal(){  
//     this.setState({show:!this.state.show})  
//   }  
//   render(){  
//     return (  
//       <div>  
//         <h2 align='center'>Example of Modal in Reactjs</h2>  
//         <div className="modalClass">  
//           <Button onClick={()=>this.handleModal()}>Click To Open Modal</Button>  
//         </div>  

//         <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
//           <Modal.Header closeButton>This is a Modal Heading</Modal.Header>  
//           <Modal.Body>This is a Modal Body</Modal.Body>  
//           <Modal.Footer>  
//             <Button onClick={()=>this.handleModal()}>Close</Button>  
//             <Button onClick={()=>this.handleModal()}>Save</Button>  
//           </Modal.Footer>  
//         </Modal>  
//       </div>  
//     )  
//   }  
// }  
// export default App;  

// import PaymentForm from './PaymentForm';
// import React from 'react'


// const App = () => {
//   return (
//     <div>
//       <PaymentForm/>

//     </div>
//   )
// }

// export default App



// import React,{useState} from 'react'


// const data = [
//   {
//     id: 1,
//     FirstName: "Ajay",
//     LastName: "Singh",
//     email: "ajay@gmail.com",
//     mobile: 3938585575
//   },
//   {
//     id: 2,
//     FirstName: "rahul",
//     LastName: "chauhan",
//     email: "rahul@gmail.com",
//     mobile: 89766545445
//   },
//   {
//     id: 3,
//     FirstName: "kailesh",
//     LastName: "ahir",
//     email: "kailash@gmail.com",
//     mobile: 872443553553
//   },
//   {
//     id: 4,
//     FirstName: "sanjay",
//     LastName: "kamal",
//     email: "sanjay@gmail.com",
//     mobile: 866844534343
//   },
//   {
//     id: 5,
//     FirstName: "sonu",
//     LastName: "singhaniya",
//     email: "sonu@gmail.com",
//     mobile: 999999999
//   },
//   {
//     id: 6,
//     FirstName: "sapna",
//     LastName: "Singh",
//     email: "sapna@gmail.com",
//     mobile: 99555666545
//   },
//   {
//     id: 7,
//     FirstName: "kanish",
//     LastName: "bhadoriya",
//     email: "kanish@gmail.com",
//     mobile: 910987865845
//   },
// ]
 


// const App = () => {


//   const[color,setColor] = useState("red");

//   const changeColor=()=>{


// setColor(color ==='red'?'green':'red');
//   }

//   return (
//     <div>
//   <table style={{borderCollapse:'collapse'}}>
//     <thead>
//                 <tr>
//                   <th>Id</th>
//                   <th>FirstName</th>
//                   <th>LastName</th>
//                   <th>email</th>
//                   <th>Mobile</th>
//                   </tr>
//                   </thead>


//             {data.map((item,index) => (
//          <tr  key={index} style={{ border: '2px solid red' }}>

//                 <td onChange={changeColor} style={{ color: item.id>5?"green":color }}>{item.id}        </td>
//                 <td style={{ color: 'blue' }} >{item.FirstName}</td> 
//                 <td style={{ fontSize: "large" }}> {item.LastName}</td>

//                  <td style={{ fontStyle: 'italic' }} >{item.email}</td>
//                 <td style={{ color: "green" }} >{item.mobile}</td>
//                 </tr>

//             ))
//             }



//                </table>
//       </div>
//   )
// }

// export default App


//  import React from 'react'
//  import Don from './Don'
//  import Don2 from './Don2'
//  import { Link } from 'react-router-dom'
//   import { BrowserRouter,Route,Routes ,Navigate} from 'react-router-dom'
// import Navbar from './Navbar'
// import User from './User'
//   const App = () => {
//      return (
//      <div>
//        <BrowserRouter>
//        <Link to='/don'>DOn kaSuper hero</Link> 
//        <hr/>
//        <Link to='/don2'><span>Don2</span></Link>
//        <Routes>
//         <Route  path='/'    element={<h1>Hii</h1>}/>
//         <Route  path='/don'   element={<Don/>}/>
//         <Route  path='/don2'    element={<Don2/>}/>
//      <Route path='navbar' element={<Navbar to='/'/>}
// />
// <Route path='/user/:name' element={<User />} />

      
//        <Route  path='/*'  element= {<Navigate  to='/'/>} />
//           </Routes>
//        </BrowserRouter>
//      </div>
//    )
//  }
//  export default App
// import React, { Component, useState } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.cityList = [{ name: 'Goa', country: 'India' },
//     { name: 'Amsterdam', country: 'Netherlands' },
//     { name: 'New York', country: 'USA' },
//     { name: 'Darjeeling', country: 'India' },
//     { name: 'Tokyo', country: 'Japan' },
//     { name: 'Lonavala', country: 'India' },
//     { name: 'Brandenburg Gate', country: 'Germany' },
//     { name: 'Reichstag Building', country: 'Germany' },
//     { name: 'Museum Island', country: 'Germany' },
//     { name: 'Munnar', country: 'India' },
//     { name: 'Leh Ladakh', country: 'India' },
//     { name: 'Goa', country: 'India' },
//     { name: 'Agra', country: 'India' },
//     { name: 'Dalhousie', country: 'India' },
//     { name: 'Coorg', country: 'India' },
//     { name: 'Rome', country: 'Italy' },
//     { name: 'Milan', country: 'Italy' },
//     { name: 'Venice', country: 'Italy' },
//     { name: 'Varanasai', country: 'India' },
//     { name: 'Jaipur', country: 'India' },
//     { name: 'The Hofburg', country: 'Austria' },
//     { name: 'Belvedere Palace', country: 'Austria' },
//     { name: 'St. Stephen Cathedral', country: 'Austria' },
//     { name: 'Kahna National Park', country: 'India' },
//     { name: 'Amritsar', country: 'India' },
//     { name: 'Mussoorie', country: 'India' },
//     { name: 'Mount Abu', country: 'India' },
//     { name: 'Tirupati', country: 'India' },
//     ]
//   }




//   render() {

//     const indianCities= this.cityList.filter(city=>city.country=== 'India')
//     return (
//       <div id="main">
//         {
//           <ol>
//             {
//            indianCities.map((data,index)=>(
//                         <li key={`${data.name},${data.country}`}>{data.name}</li>
//             ))
//   }
//   {
//     this.cityList.filter(city=>city.country !== 'India').map((city,index)=>(
//       <li key={index}>{city.name}</li>
//     ))

//   }
//           </ol>
//         }
//       </div>
//     )
//   }
// }


// export default App;







// import React, { useEffect, useState } from 'react'
// import './App.css'
// const App = () => {

//   const[color,setColor]= useState('redColor');
//   const[value,setValue] = useState(true);

// const handleClick=()=>{

// setValue(!value)
// }

// useEffect(()=>{
// if(value){

//    setColor('redColor');
// }


// if(!value){
//   setColor('blueColor');
// }
// },[value])


//   return (
//     <div>
//       <h1 className={color}>Newton Schoool</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// // export default App

// import React, { useState, useEffect } from 'react';

// const API_URL = 'https://myapi.com/data';

// const App = ({ itemsPerPage }) => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`${API_URL}?page=${currentPage}`);
//       const jsonData = await response.json();
//       setData(jsonData);
//     };
//     fetchData();
//   }, [currentPage]);

//   const totalPages = Math.ceil(data.total / itemsPerPage);

//   const handleClick = page => {
//     setCurrentPage(page);
//   };

//   const renderPagination = () => {
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pages.push(
//         <button key={i} onClick={() => handleClick(i)}>{i}</button>
//       );
//     }
//     return pages;
//   };






//   return (
//     <>
//     {
//           data.items.map((item, index) => (

//             <div key={index}>{item}</div>
//           ))
//     }
//       <div>{renderPagination()}</div>
//     </>
//   );
// };

// export default App;


// import React, { useState } from 'react'

// const App = () => {

//     const[name,setName]= useState('marco')

//     const handleClick=(e)=>{
//  const data=   name==='marco'?'polo':"marco"
//     setName(data)
//     }
//   return (
//     <div>
//      <h1 id='marco-polo'>{name}</h1>

//      <button id='marco-polo-toggler' onClick={handleClick}    >{name==='polo'?'marco':"polo"}</button>
//     </div>
//   )
// }

// // export default App
// import React from 'react'

// const App = () => {

//     const states = [{
//         name: "Madhya Pradesh",
//         cities: [{
//             name: "Indore",
//             towns: [{
//                 name: "Mhow"
//             }, {
//                 name: "Dewas"
//             }]
//         }, {
//             name: "Bhopal",
//             towns: [{
//                 name: "Manit"
//             }, {
//                 name: "Berasia"
//             }]
//         }, {
//             name: "Gwalior",
//             towns: [{
//                 name: "Ajaypur"
//             }]
//         }]
//     }, {
//         name: "Jharkhand",
//         cities: [{
//             name: "Dhanbad",
//             towns: [{
//                 name: "IIT(ISM) Dhanbad"
//             }, {
//                 name: "Hirapur"
//             }]
//         }, {
//             name: "Wasseypur",
//             towns: [{
//                 name: "Sardar khan's"
//             }, {
//                 name: "Faizal khan's"
//             }]
//         }, {
//             name: "Mirzapur",
//             towns: [{
//                 name: "Kaleen bhaiya's"
//             }, {
//                 name: "Guddu bhaiya's"
//             }]
//         }]
//     }, {
//         name: "Assam",
//         cities: [{
//             name: "Guwhati",
//             towns: [{
//                 name: "Amin"
//             }, {
//                 name: "Jalah"
//             }]
//         }, {
//             name: "Jungle1",
//             towns: [{
//                 name: "Tiger found at IIT Guwahati"
//             }, {
//                 name: "Leopard found in IIT Guwahati"
//             }]
//         }, {
//             name: "Tezpur",
//             towns: [{
//                 name: "Dibrugarh"
//             }, {
//                 name: "Silchar"
//             }]
//         }]
//     }, {
//         name: "Bihar",
//         cities: [{
//             name: "Patna",
//             towns: [{
//                 name: "Sonpur"
//             }, {
//                 name: "Maner"
//             }]
//         }, {
//             name: "Gaya",
//             towns: [{
//                 name: "Bakraur"
//             }, {
//                 name: "Barachatti"
//             }]
//         }, {
//             name: "Darbhanga",
//             towns: [{
//                 name: "Singhwara"
//             }, {
//                 name: "Jale"
//             }]
//         }]
//     }];




//     return (
//         <div>
//             {
//                 states.map((data, index) => (
//                     <div key={index}>

//                         <h1>{data.name}</h1>
                       
// <h2>Cities</h2>
// <ul>
//     {data.cities.map((city,cityIndex)=>(
//    <li key={cityIndex}>
//     <h3>{city.name}</h3>
//     <h4>Towns</h4>
//     <ul>
//         {city.towns.map((town,townIndex)=>(
//             <li key={townIndex}>
//                 {town.name}
//             </li>
//         ))}
//     </ul>
//    </li>
//     ))}
// </ul>


//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default App


//LOCALSTORAGE CUSTOM HOOK IN REACT


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <button 
//       onClick={()=>{
//         localStorage.setItem('arr',JSON.stringify([1,2,3,4]))
//         localStorage.setItem('obj',JSON.stringify({name:'name1',address:"add1"}));
//       }}>Save</button>
//       {/* <button onClick={()=>{
//         const obj = localStorage.getItem('obj')
//      console.log(JSON.parse(obj))
//       }}>Get Vaue</button> */}
//     </div>
//   )
// }

// export default App





// import React, { useEffect, useState } from 'react'
// const App = () => {
// const[value,setValue] = useState('');
// const[isClick,setIsClick] = useState(false);

// useEffect(()=>{
//     if(isClick){
//     localStorage.setItem('vslue',value);
//     setIsClick(false);
//     }
// },[value,isClick])

// const handleChange=(event)=>{
//     setIsClick(event.target.value)
// }
// const handleClick=()=>{
//     setIsClick(true);
// }


//   return (
//     <div>
//         <input type='text'   onChange={handleChange}/>
//         <button onClick={handleClick}>Click</button>
      
//     </div>
//   )
// }

// export default App



//You tube locacalstorage best video


// import React, { useRef } from 'react'

// const App = () => {

//     const data = useRef();
//     console.log(data)

//     const  handleClick=()=>{
//         console.log(data.current.value);
//         localStorage.setItem('inputMyData',data.current.value)
//     }
//     console.log(localStorage.getItem('inputMyData',"***"))


//   return (
//     <div>
//         <input type='text' ref={data}/>
//       <button onClick={handleClick}>Add</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = () => {
//     // Login logic here
//     console.log("Login clicked");
//   };

//   const handleSignup = () => {
//     // Signup logic here
//     console.log("Signup clicked");
//   };

//   return (
//     <div>
//       <h1>Login/Signup Form</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={handleEmailChange}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleSignup}>Signup</button>
//     </div>
//   );
// };

// export default LoginForm;

//OLD TO ASSIGNMEMT ADD,UPDATE,EDIT,DELETE


// import React, { useState } from 'react';

// const App = () => {
//   const [task, setTask] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);
//   const [newTask, setNewTask] = useState('');
//   const [editTask, setEditTask] = useState('');

//   const handleTaskChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       setTask([...task, newTask]);
//       setNewTask('');
//     }
//   };

//   const handleEditTask = (e) => {
//     setEditTask(e.target.value);
//   };

//   const handleEditedTasked = (index) => {
//     setEditIndex(index);
//     setEditTask(task[index]);
//   };

//   const handleEditWay = (index) => {
//     if (editTask.trim() !== '') {
//       const updatedTasks = [...task];
//       updatedTasks[index] = editTask;
//       setTask(updatedTasks);
//       setEditIndex(-1);
//     }
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = task.filter((_, i) => i !== index);
//     setTask(updatedTasks);
//   };

//   return (
//     <div>
//       <textarea id='task' onChange={handleTaskChange} value={newTask}></textarea>
//       <button id='btn' onClick={addTask}>
//         Add Task
//       </button>
//       <ul>
//         <li className='list'>
//           {task.map((item, index) =>
//             index === editIndex ? (
//               <>
//                 <textarea id='task' onChange={handleEditTask} value={editTask}></textarea>
//                 <button onClick={() => handleEditWay(index)}>Save Task</button>
//               </>
//             ) : (
//               <>
//                 {item}
//                 <button onClick={() => handleEditedTasked(index)}>Edit</button>
//                 <button onClick={() => deleteTask(index)}>Delete</button>
//               </>
//             )
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default App;


 // Topic: answers mcq and question


//  import React, { useState } from 'react'
 
//  const App = () => {
//   const[question,setQuestion] = useState('');
//   const [answer,setAnswer] = useState('');
//   const[result,setResult] = useState('');
   
//   const fetchApi=async()=>{
//     let data  =  await fetch('https://opentdb.com/api.php?amount=1');
//     let correct = await data.json();
//     setQuestion(correct.results);
//        console.log(correct)
    
//   }
//   useState(()=>{      
//     fetchApi()   
//   },[])
//   const handleChange=(e)=>{
//     setAnswer(e.target.value);
//   }
//    const submitClick=()=>{
//    if(answer.trim()){
//     const corrrectAnser = question[0].correct_answer;
//      if(answer.toLocaleLowerCase() === corrrectAnser.toLocaleLowerCase()){
//       setResult('Correct!');
//      }
//      else{
//       setResult(`Incorrect. The correct answer is: ${corrrectAnser}`);
//      }
    
//    }
//    setAnswer('');
//    fetchApi();
    
  
//    }
    

//    return (
//      <div>
//       <p className='question'>Question:{question&& question.length >0 ? question[0].question:""}</p>
//       <input type='text' className='answer-value'
//       value={answer} onChange={handleChange}/>
//       <button onClick={submitClick}>submit</button>
//       <p>Answer:{result}</p>
//      </div>
//    )
//  }
 
//  export default App
 

// import React, { useState} from 'react';

// import { signUpFormValidation } from './utils/validation';


// const App = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [consent, setConsent] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       name,
//       email,
//       password
//     };

//     const validationErrors = signUpFormValidation(formData);
//     setErrors(validationErrors || {});

//     if (!validationErrors) {
//       // Perform form submission logic here
//       console.log('Form submitted successfully:', formData);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         {errors.name && <span className="error">{errors.name}</span>}

//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         {errors.email && <span className="error">{errors.email}</span>}

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {errors.password && <span className="error">{errors.password}</span>}

//         <label htmlFor="consent">
//           <input
//             type="checkbox"
//             id="consent"
//             checked={consent}
//             onChange={(e) => setConsent(e.target.checked)}
//           />
//           I agree to the terms and conditions
//         </label>

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default App;


//golf wall
// import React, { Component, useState } from "react";
// import './style.css';
// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
//       this.setState({renderBall:true});
   
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
//       document.addEventListener("keydown",(event)=>{
//      if(event.key === "ArrowRight"){
//        const {ballPosition} = this.state;

//         const currentPosititon =  parseInt(ballPosition.left);
//         const newPosition = currentPosititon+5;
//         this.setState({
//           ballPosition:{left:newPosition +"px"}
//         });
//    }
//   })
//          }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }


// export default App;






// import { useEffect } from "react";
// import { useState } from "react";

// const useLocalState = (stateVar, value) => {
//   const [state, setState] = useState(value);

//   useEffect(() => {
//     console.log(state);
//     localStorage.setItem(stateVar, state);
//   }, [state]);
//   return [state, setState];
// };

// export default useLocalState;







// import React, { useState } from "react";


// export default function App() {
//   const [state, setState] = useState({
//     email: "",
//     password: ""
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setState((prevProps) => ({
//       ...prevProps,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(state);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <div className="form-control">
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             value={state.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-control">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={state.password}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-control">
//           <label></label>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }
// import React from 'react';
// function App() {
//   const fun = () => {

//     console.log("button clicked");

//   };
//   function myFunction() {
//     console.log("hii");
//     <button onClick={fun}>Your Watchlist  </button>
//   }
//   let result = fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo")
//     // operation.json();
//     //console.log(operation.json());
//     .then(response => response.json())

//     .then(json => console.log(json));
//   console.log(result)


//   let btn = document.getElementsByClassName("searchlist");
//   return (

//     <>
//       <div id="root"></div>
//       <div class="container">

//         <h1><i class="fa-solid fa-arrow-up"></i>Stock Market Dashboard   <i class="fa-solid fa-arrow-down"></i></h1>
//         <input type="text" class="search" id="search" placeholder="Search for symbool" min="0" max='9' />
//         <span><i id='change' class="fa-sharp fa-solid fa-magnifying-glass"></i></span>
//       </div>
//       <div id="btn">

//         <button>INTRADAY</button>
//         <button>DAILY</button>

//       </div>
//       <span id="check">

//         <button>WEEKLY</button>
//         <button onClick={fun}>MONTHLY</button>

//       </span>
//       <h4> <span>123.45</span> <button>WEEKLY</button><i class="fa-sharp fa-solid fa-circle-xmark"></i></h4>

//       <h4> MS     <span>123.45</span> <button>DAILY</button> <i class="fa-sharp fa-solid fa-circle-xmark"></i></h4>
//       <h4> IBM     <span>123.45</span> <button>WEEKLY</button><i class="fa-sharp fa-solid fa-circle-xmark"></i></h4>

//     </>
//   )
// }


// // btn.addEventListener("Click").innerText
// // }





// export default App;







// import React, { useState } from 'react'
// import './App.css';
// const App = () => {

//   const [formFields, setFormFields] = useState({
//     username: "",
//     email: "",
//     password: "",
//     contactNo: ""
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormFields({...formFields, [name]: value});
//   }

//   function validateForm(inputValues) {
//     const errors = {};

//     if (!inputValues.username) {
//       errors.username = "Username is required";
//     }

//     if (!inputValues.email) {
//       errors.email = "Email is required";
//     }

//     if (!inputValues.password) {
//       errors.password = "Password is required";
//     } else if (inputValues.password.length < 4) {
//       errors.password = "Password must have more than 4 characters";
//     }
    
//     if (!inputValues.contactNo) {
//       errors.contactNo = "Contact no. is required";
//     } else if (inputValues.contactNo.length !== 10) {
//       errors.contactNo = "Invalid contact no.";
//     }

//     return errors;
//   }

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     setFormErrors(validateForm(formFields));
//     setIsFormSubmitted(true);
//     setFormFields({
//       username: "",
//       email: "",
//       password: "",
//       contactNo: ""
//     })
//   }

//   return (
//     <div id="main">
//       {Object.keys(formErrors).length === 0 && isFormSubmitted ? <h3 className='success-alert'>Registered Successfullly</h3> : null}
//       <form onSubmit={handleFormSubmit}>
//         <h1>Registeration Form</h1>
//         <section>
//           <label>Username</label>
//           <input type="text" name='username' value={formFields.username} onChange={handleInputChange} />
//           {formErrors.username && <p className='username-error'>{formErrors.username}</p>}
//           <label>Email</label>
//           <input type="email" name='email' value={formFields.email} onChange={handleInputChange} />
//           {formErrors.email && <p className='email-error'>{formErrors.email}</p>}
//           <label>Password</label>
//           <input type="password" name='password' value={formFields.password} onChange={handleInputChange} />
//           {formErrors.password && <p className='password-error'>{formErrors.password}</p>}
//           <label>Contact Number</label>
//           <input type="number" name='contactNo' value={formFields.contactNo} onChange={handleInputChange} />
//           {formErrors.contactNo && <p className='contactNo-error'>{formErrors.contactNo}</p>}
//           <button onClick={handleFormSubmit}>Submit</button>
//         </section>
//       </form>
//     </div>
//   )
// }
// export default App;



// import React, { Component } from "react";
// import './App.css';

// class App extends Component {
//     render() {

//         return (

//             <ol key={"relativeList"}>
//                 < li key={'relativeListItem1'}>Akshit</li>
//                 < li key={'relativeListItem2'} >Human</li>
//                 < li key={'relativeListItem3'} >God</li>
//             </ol>

//         )
//     }
// }



//export default App;






// import React, { createContext } from 'react'
// import Child from './Child';

// const data =  createContext();
// const data1 = createContext();
// const App = () => {
// // const name = "Sunil";
// // const Age = 50;

//   return (
//     <div>
//         <data.Provider value={{name:"Sunil ahirwar class bsc"}}>
//             <data1.Provider value={{age:"25 saal unemployed allways"}}>
//       <Child/>
//       </data1.Provider>
//       </data.Provider>
//     </div>
//   )
// }

// export default App
// export {data,data1}






// import React from 'react'
// import AddingListItem from './AddingListItem'
// import SingleListAddItem from './SingleListAddItem'
// import StopWatch from './StopWatch'
// import StopwatchuseReduce from './StopwatchuseReduce'
// import TimeDate from './TimeDate'
// import CountDownTimer from './CountDownTimer'
// import LocalStorageHook from './LocalStorageHook'
// import SaveLocalStorage from './SaveLocalStorage'
// import Login from './Login'
// import Inline from './InlineUses'
// import InlineUses from './InlineUses'

// const App = () => {
//   return (
//     <div>
//         {/* <AddingListItem/> */}
//         {/* <SingleListAddItem/> */}
//         {/* <StopWatch/> */}
//         {/* <StopwatchuseReduce/> */}
//         {/* <TimeDate/> */}
//         {/* <CountDownTimer/> */}
//         {/* <LocalStorageHook/> */}
         
    
//       {/* <SaveLocalStorage/>
//       <Login/> */}
//       <InlineUses/>
//     </div>
//   )
// }

// export default App











// import React from 'react'
// import './App.css'
// const App = () => {
//   const evening =  "good_evening";
//   const afternon  = "good afternoon";   
    // let morning = new Date(2023,12,5,14);
    // morning = morning.getHours();
    // // const afternon = new Date(2023,7,5,14);
    // // const night = new Date(2023,7,5,20);
//     let greeting ='';
//     const cssStyle={

//     };

//     if(morning>=1 && morning<12){
//         greeting = "Moring guys"
//         cssStyle.color = 'green';

//     }
//     else if( morning>=12 && morning<18){
//  greeting ='Afternoon'
//  cssStyle.color = 'blue';
//     }
// else{
//     greeting = 'Night'
//     cssStyle.color = 'red';
// }

//   return (
//     <div>
//         <p className={afternon?"color-red" :"color-green"}>Hi<span 
//         // style={cssStyle}
//         > {greeting?afternon:evening    } </span></p>
//         {/* <p  className='color-green'>{afternon}</p>
      
//         <p>{night}</p> */}
      
//     </div>
//   )
// }

// export default App





// import React from 'react'
// import './App.css'
// const App = () => {
  
//   //  const morning =   'Good morning';
   
//   //  const evening =   'Good evening';

//   //  const afternoon = 'Good afternoon';
//   // let morning = new Date(2023,12,5,14);
//   //    morning = morning.getHours();
//   //    const afternon = new Date(2023,7,5,14);
//   //     const night = new Date(2023,7,5,20);

//    const date = new Date();
//   const time =   19  //prompt("Please Enter your time ");
//     //  date.getHours();
// let salutation= ''
// if (time < 12) {
//   salutation = "Good morning";

 
// } else if (time < 18) {
//   salutation = "Good afternoon";

// } else {
//   salutation = "Good evening";

// }
//   return (
//     <div   className={(time>=12  && time<18) ? "color-red":time>=18?"color-green":"color-gray"}>
//         <h1>{time}</h1>
//         <h1>{salutation}</h1>
     
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import SearchFunct from './SearchFunct'
// import ProcessbarCafe from './ProcessbarCafe'
// const App = () => {
//   return (
//     <div>
//    <SearchFunct/>
//    <header className="App-header">
      
    
//    {/* <ProcessbarCafe/> */}
//    </header>
//     </div>
//   )
// }

// export default App



// import React from 'react';
// import './App.css';
// import ProcessbarCafe from './ProcessbarCafe';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <ProcessbarCafe/>
//       </header>
//     </div>
//   );
// }
// export default App;






// import React from 'react'
// import PercentageProgress from './PercentageProgress'
// import ArrowDropDown from './ArrowDropDown'

// const App = () => {
//   return (
//     <div>
//       <PercentageProgress/>
//       {/* <ArrowDropDown/> */}
//     </div>
//   )
// }

// export default App






//  import React from 'react'
//  import UseReducersUseFilter from './UseReducersUseFilter'
// import CustomHook from './CustomHook'
 
//  const App = () => {
//    return (
//      <div>
//        <UseReducersUseFilter/>
//        {/* <CustomHook/> */}
//      </div>
//    )
//  }
 
//  export default App
 







//  import React from 'react'
// import CounterUsed from './learnbucket/CounterUsed';
// import LocaalStorageuse from './revision/LocaalStorageuse';
// import CrudOperation from './CrudOperation';
//  const App = () => {
//    return (
//      <div>
//        {/* <CounterUsed/> */}
//        {/* <LocaalStorageuse/> */}
//        <CrudOperation/>
//      </div>
//    )
//  }
 
//  export default App
 


//  import React from 'react'
// import SearchFunct from './SearchFunct'
 
//  const App = () => {
//    return (
//      <div>
//        <SearchFunct/>
//      </div>
//    )
//  }
 
//  export default App
 

// import React from 'react';
// import ImageSlider from './components/ImageSlider';
// import img1 from './images/software.jpg'
// import img2 from './images/software2.jpg'

// const images = [img1,img2];
// const App = () => {
//   return (
//     <div>
//       <ImageSlider
//         images={images}
//         parallaxIntensity={20}
//         transitionSpeed={0.5}
//       />
//     </div>
//   );
// };
// export default App;]

// import React ,{ useState, useEffect} from "react";
// import  Chart  from "react-apexcharts";
// function Piechart()
//      {
//    const [stdudentSubject, setStudentsubject]= useState([]);
//    const [studentMarks, setStudentMarks]= useState([]);

//    useEffect( ()=>{
//        const sSubject=[];
//        const sMarks=[];
//        const getStudentdata= async()=>{
//        const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
//        const resData= await reqData.json();       
//        for(let i=0; i< resData.length; i++)
//        {
//         sSubject.push(resData[i].subject);
//         sMarks.push(parseInt(resData[i].marks));
//        }
//        setStudentsubject(sSubject);
//        setStudentMarks(sMarks);
//         //console.log(resData); 
//        }

//     getStudentdata();

//    },[]);

//     return(
//         <React.Fragment>
//             <div className="container-fluid mb-3">
//                 <h3 className="mt-3">Welcome to Piechart </h3>
//                 <Chart 
//                 type="pie"
//                 width={1349}
//                 height={550}

//                 series={ studentMarks }                

//                 options={{
//                         title:{ text:"Student PieChart"
//                         } , 
//                        noData:{text:"Empty Data"},                        
//                       // colors:["#f90000","#f0f"],
//                       labels:stdudentSubject                     

//                  }}
//                 >
//                 </Chart>
//             </div>
//         </React.Fragment>
//     );
// }
// export default Piechart;


 // i created  sidebar from sideber

// import { useState } from "react";
// import { BsArrowLeftShort ,BsSearch} from "react-icons/bs";

// import { AiFillEnvironment } from "react-icons/ai";

//    export default function App() {   
//     const [open,setOpen] = useState(true);
//     return (
//        <div className="flex">
//         <div className= {`bg-gray-600 h-screen p-5 pt-8 ${open?'w-72':"w-32"} relative`}>
//         <BsArrowLeftShort
//    className={`bg-white text-dark-purple text-3xl rounded-full absolute
//    top-9 border border-purple-300 cursor-pointer ${!open && 'rotate-180'} duration-300 `}
//           onClick={()=>setOpen(!open)}
//         />
//         <div className="inline-flex"> 
//             <AiFillEnvironment 
//              className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left `}
//             />
//             <h1 className={`text-white origin-left font-medium px-4 duration-300 text-2xl ${!open && 'scale-0'}`}>tailwind</h1>
//         </div>
//         <div className="flex items-center rounded-md bg-light-white
//         mt-6 px-4 py-2">
//             <BsSearch  className="text-white  bg-red-300 text-lg 
//             block float-left cursor-pointer" />
//             <input type={'search'} className={`text-base" ${!open && 'scale-0'}`} />
//         </div>
//         </div>
//         <div className="p-7">
//             <h1 className="">Home Page</h1>
//         </div>
//        </div>
//     )
//   }



// import React, { useState } from 'react'
// import Chart from 'react-apexcharts';
// import  salesData from './data'
// import { useEffect } from 'react';

//   const series = [44,55,41,17,15];
//  const options = {
//      chart:{
//     type:"pie"
//   },
//    labels:["A","B", "C","D","E"],
//   fill: {
//   }
//  };

//    const App = () => {
//      const[month,setMonth] = useState('jan');
//    const [filt,setFilt] = useState([]);
    
//    const handleMonthChange = (e) => {
//   setMonth(e.target.value)
//     }
 
//    useEffect(()=>{
//     const outputdata = filt(salesData,month);
//   setFilt(outputdata);
//    },[month])

//    const chartOptions = {
//     labels: filt.map(item => item.category),
//     dataLabels: {
//       enabled: true,
//     },
//   };

//   const PieChartData = {
//     series: filt.map(item => item.sales),
//     options: {
//       ...chartOptions,
//       chart: {
//         type: 'pie',
//       },
//     },
//   };
//   return (
//     <div>
//       <div>
//         <label>Select month</label>
//         <select value={month}  onChange={handleMonthChange}>
//          {Object.keys(salesData[month]).map((month)=>(
//           <option key={month} value={month}>
//   {month}

//           </option>
//           ))}
//         </select>
//       </div>
//       <h2>Seletedmonth {month}</h2>
//       <Chart options={PieChartData.options} series={PieChartData.series}  type='pie' height={300} />
//     </div>
//   )
// }
// export default App




import React from 'react'
import Tailwind from './taiwinduse/Tailwind'

 const App = () => {
 return (
    <div>
      <Tailwind/>
    </div>
  )
}
export default App
