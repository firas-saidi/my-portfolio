import React from 'react'
import {Link} from "react-router-dom"

function Header() {

  return (
  
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid myheader">
  <Link to="/" className="logo"><img src="img/logo.jpg" alt=''/></Link>
    <button className="navbar-toggler btn btn-secondary clp" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon clpin"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNav">
      
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link  mynav-a" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link mynav-a" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mynav-a" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mynav-a" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mynav-a" href="#profil">Profil</a>
        </li>
        <li className="nav-item mynav">
          <a className="nav-link mynav-a" href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link mynav-a" to={"/mycv"}>MyCv</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  

  

  )}


export default Header
