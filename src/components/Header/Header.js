import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = ({user, setUser}) => {
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
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
                <Image 
                style={{height: '30px'}} roundedCircle 
                src={user?.photoURL}></Image>
                : <li className="nav-link items  ms-3 text-info fw-bolder">Login</li>
                }
                      
                      </Link>
                      <li className="nav-link items  ms-3 text-info fw-bolder">
            {user?.displayName}
          </li>
                      <Button variant="light">Log Out</Button>
            </Nav>
            <div className='d-lg-none'>
        
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;