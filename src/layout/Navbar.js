import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
        <ul>
        <li>
          <Link to="/">List</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>
          <Link to="/completed">Completed Tasks</Link>
        </li>
        <li>
          <Link to="/trash">Trash</Link>
        </li>
        
      </ul>
    </nav>
  )
}
export default Navbar;
