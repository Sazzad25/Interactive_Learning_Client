import React, { useContext, useState } from 'react';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaGraduationCap, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { AuthContext } from '../../contexts/AuthProvider';


const Header = () => {
  const {user,  logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch(err => console.log(err));
  }

  // set Them toggle
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (sunColor) => {
    setDarkMode(sunColor);
  };
  
  
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="success" variant="light">
        <Container>
          <Navbar.Brand> <FaGraduationCap></FaGraduationCap> </Navbar.Brand>
          <Navbar.Brand>Interactive Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                     
                      <Link to="/" className="text-decoration-none">
                      <li className="nav-link items  ms-3 text-info fw-bolder">Home</li>
                      </Link>
                      <Link to="/courses" className="text-decoration-none">
                      <li className="nav-link items  ms-3 text-info fw-bolder">Courses</li>
                      </Link>
                      <Link to="/faq" className="text-decoration-none">
                      <li className="nav-link items  ms-3 text-info fw-bolder">FAQ</li>
                      </Link>
                      <Link to="/blog" className="text-decoration-none">
                      <li className="nav-link items  ms-3 text-info fw-bolder">Blog</li>
                      </Link>
                      <Link to="/login" className="text-decoration-none">
                      {user?.photoURL ?

                         <>
                          <li>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> {user?.displayName}</Tooltip>}>
                          <Image
                           style={{height: '30px'}} roundedCircle 
                           src={user?.photoURL}></Image>
                           </OverlayTrigger>
                          </li>
                         </>
                         : 
                         <>
                         </>
                         }
                      
                      </Link>
                      <>
                         {
                            user?.uid ?
                            <>
                            <span className="nav-link items  ms-3 text-info fw-bolder">
                            {user?.displayName}
                            </span>
                            <button onClick={handleLogOut}>Sign Out</button>
                            </>
                            :
                            <>
                             <Link to='/login' className="nav-link items  ms-3 text-info fw-bolder">Login</Link>
                            </>
                         }
                      </>
                </Nav>
                <div >
                <DarkModeSwitch
                 className='fs-6'
                 style={{ marginBottom: '2rem' }}
                 checked={isDarkMode}
                 onChange={toggleDarkMode}
                 size={50}
                 />
                 </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;