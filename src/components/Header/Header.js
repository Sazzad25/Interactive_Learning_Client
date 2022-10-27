import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaGraduationCap, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = ({user, setUser}) => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (sunColor) => {
    setDarkMode(sunColor);
  };
  const [open, setOpen] = useState(false);

  const unhover = () => {
    setOpen('')
  }

  const hover = () =>{
    setOpen(user?.displayName);
  }
  
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
                <Image onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}
                style={{height: '30px'}} roundedCircle 
                src={user?.photoURL}></Image>
                : <li className="nav-link items  ms-3 text-info fw-bolder">Login</li>
                }
                      
                      </Link>
                      <li className="nav-link items  ms-3 text-info fw-bolder">
                      {user?.displayName}
          </li>
            </Nav>
            <div className=''>
            <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={120}
    />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;