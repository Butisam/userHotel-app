import React from 'react'
import './Navbar.css'

import { useHistory } from 'react-router-dom';

const Navbar = () => {
  let history = useHistory();
  const handleProfile = (()=>{
  history.push("/profile")
})
const logout =(()=>{
  history.push("/")
})
  return (
    <div className="navbar" >
      <div className="navContainer">
        <span className="logo">MOBeBooking</span>
        <div className="navItems">
          <button className="navButton" onClick={handleProfile}>Profile</button>
          <button className="navButton" onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar