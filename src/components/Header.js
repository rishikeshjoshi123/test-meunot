import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import { useEffect,useState } from 'react';

function Header() {


   const [bilist, showbilist] = useState(true);
   const [navbarmobile, shownavbarmobile] = useState(false)

   const toggleBiList = (e) => {
       showbilist(!bilist)
       shownavbarmobile(!navbarmobile)
   }

   useEffect(() => {
     let atag = document.getElementsByClassName('atag');
     for(let i=0;i<atag.length;i++)
     {
      atag[i].addEventListener("click", (event) =>{
        if(navbarmobile) {
           atag[i].nextElementSibling.classList.toggle('dropdown-active')
        }
      })
     }
     
   },[navbarmobile,bilist])

  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
    <div className="container d-flex align-items-center">

      <div className="logo me-auto">
        {/* <h1><a href="index.html">MueNot</a></h1> */}
        <a href="/"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
      </div>

      <nav id="navbar" className={`navbar order-last order-lg-0 ${navbarmobile ? "navbar-mobile" : ""}`}>
        <ul>
          <li><a className="nav-link scrollto" href="/">Home</a></li>
          <li className="dropdown"><a href="#" className='atag'><span>Services</span> <i className="bi bi-chevron-down"></i></a>
            <ul>      
              <li className="dropdown"><a href="#" className='atag'><span>K12</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Educational Content Developing</a></li>
                  <li><a href="#">Copy Editing</a></li>
                  <li><a href="#">K12 Video Lectures</a></li>
                  <li><a href="#">TextBook Development</a></li>
                  <li><a href="#">Assesment Item Development</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#" className='atag'><span>Higher Education</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Copy Editing</a></li>
                  <li><a href="#"><span>Proof Reading</span></a></li>
                  <li><a href="#">Professional School Teacher</a></li>
                  <li><a href="#">Content Review and Validation</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#" className='atag'><span>Test Preparation</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">College and University</a></li>
                  <li><a href="#">School Exams</a></li>
                  <li><a href="#">English Language Tests</a></li>
                  <li><a href="#">Nursing</a></li>
                  <li><a href="#">Medical Courses</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#" className='atag'><span>Learning Solutions</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">AR and VR</a></li>
                  <li><a href="#">Blended E-Learning Solutions</a></li>
                  <li><a href="#">Corporate Learning</a></li>
                  <li><a href="#">Distance E-Learning</a></li>
                  <li><a href="#">Mobile Learning</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#blog">Blog</a></li>
          <li><a className="nav-link scrollto " href="/career">Career</a></li>
          <li><a className="nav-link scrollto" href="#footer">Contact</a></li>
        </ul>
        <i className={`bi ${bilist ? "bi-list" : "bi-x"} mobile-nav-toggle`} onClick={(e) => toggleBiList(e)} ></i>
      </nav>

      {/* <!-- Example single danger button --> */}
      <div className="dropdown" style={{margin:"0 20px"}}>
       
        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Login
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to={'/authUser'}><a className="dropdown-item" href="#">For User</a></Link>
          <div class="dropdown-divider"></div>
          <Link to={'/authAdmin'}> <a className="dropdown-item" href="#">For Admin</a></Link>
        </div>
      </div>

      </div>
  </header>
  )
}

export default Header