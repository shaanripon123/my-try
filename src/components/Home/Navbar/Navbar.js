import React from 'react';
import './Navbar.css'
import logo from '../../../images/logo/Logo@1X.png'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light shaan">
        <div class="container-fluid">
          <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul class="navbar-nav ">

                <li class="nav-item">
                <img className="logo" src={logo} alt="" width="180" height="32" ype="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           </img>
              </li>

              <li class="nav-item">
                <a class="nav-link active text-white mx-3" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white mx-3" href="/wk">Our Work</a>
              </li>
                <li class="nav-item">
                <a class="nav-link text-white mx-3" href="/review">Review</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white mx-3" href="/about">About US</a>
              </li>  
              <li class="nav-item mx-3">
                <a class="nav-link text-white" href="/contact">Contact US</a>
              </li>  
              <li class="nav-item mx-3">
              <button type="button" class="btn btn-warning login">Login</button>
              </li>  
            </ul>
          </div>

        </div>
      </nav>
     
    );
};

export default Navbar;