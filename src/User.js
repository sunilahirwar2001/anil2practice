// import React from "react";
// class User extends React.Component{
//     constructor(name){
//         super();
//         this.state={
//             email:"anil@gmail.com"
//         }
//     }
//     render(){
//         console.warn("Render Method",this.state.email);
//         return(
//             <div>
//                 <h1>User component</h1>
//                 <button onClick={()=>this.setState({email:"sindu@gmail.com"})}
//       >Update Sum</button>     
//        </div>
//         )
//     }
// }
 

// export default User;


  import { useParams } from "react-router-dom"
  
      const User = ()=> {
     const params = useParams();
   const {name} = params();

    console.log(name);
   return (
    <div>
        <h1>This is {name} page</h1>
        <h3>Hi</h3>
     </div>
  )
}

export default User
