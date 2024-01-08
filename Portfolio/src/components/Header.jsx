import {useState,useEffect} from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import {MdClose} from 'react-icons/md'
      
export default function Header() {
 
  const [state, setstate] = useState(false);
  const click=()=>{  
    setstate(!state)

  }
   
   
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img style={{ objectFit: 'cover', marginTop: '10px', borderRadius: '50%' }} src="../images/images.jpg" width='70px' height='70px' alt="image for logo" />
          </NavLink>

          <button onClick={click} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {state ? <MdClose onClick={click}/> :   <span className="navbar-toggler-icon"></span> }  
          </button>
          <div className="collapse navbar-collapse custom-navbar" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 custom-navbar">
              <li className="nav-item">
                <NavLink className="nav-link hi"  style={{ color: 'rgb(86, 91, 98)' }} to="/" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link hi"  style={{ color: 'rgb(86, 91, 98)' }} to="/features">Features</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link hi"  style={{ color: 'rgb(86, 91, 98)' }} to="/projects">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link hi"  style={{ color: 'rgb(86, 91, 98)' }} to="/resume">Resume</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link hi"  style={{ color: 'rgb(86, 91, 98)' }} to="/contact">Contact</NavLink>
              </li>
                        </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

