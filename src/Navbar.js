import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
         <ul>
            <li><NavLink style={{background:"red",margin:"12px",padding:"12px"}}>
                <Link to='/'> Home</Link></NavLink>
            </li>
            <li>
    <NavLink  style={{background:"green"}}>
       <Link to='/about'> About</Link> </NavLink>  
            </li>
        <li>
                <NavLink  style={{background:"blue"}}>
                <Link to='/contact'>COntact</Link></NavLink>
            </li>
            <li>
                <Link to='/user/:anil'> Anil</Link>
                
            </li>
         </ul>
      
    </div>
  )
}

export default Navbar
