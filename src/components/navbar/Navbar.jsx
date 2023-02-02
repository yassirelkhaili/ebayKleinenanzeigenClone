import React from 'react'
import  "./navbar.css";

const Navbar = () => {
  return (
    <div className=' navbar container-fluid row'>
    <div className='container-logo col-3'>
    <img  className='logo' alt='main logo' src="assets/main-logo.png"/>
    <div className='slogan'>Kostenlos.Einfach.Lokal</div>
    </div>
    <div className="mid-section col-5">
    <div className="search-section">
    <div className='search-bar'>
    <input className='search-field' placeholder='Was suchst du?'/>
    </div>
    <button className='search-button'><img className='search-icon' alt="search icon" src="https://img.icons8.com/ios-filled/30/FFFFFF/search--v1.png"/></button>
    </div>
    </div>
    <div className='signup-section col-3'>
    <button className="register btn">Registrieren</button>
    <span>oder</span>
    <button className="sign-up btn"><img className='sign-up-icon' alt='sign-up icon' src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/FFFFFF/external-user-back-to-school-kmg-design-basic-outline-kmg-design.png"/><span className='einloggen'>Einloggen</span></button>
    </div>
    </div>
  )
}

export default Navbar