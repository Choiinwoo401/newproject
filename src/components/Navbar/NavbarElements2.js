import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Cookies from 'js-cookie';

const NavbarElements2 = ({ username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the onLogout function passed from the parent component
    Cookies.remove('authToken'); // Remove the authToken cookie
    Cookies.remove('username'); // Remove the username cookie
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">RIQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Information">정보</Nav.Link>
              <Nav.Link as={Link} to="/Trade">거래</Nav.Link>
              <Nav.Link as={Link} to="/Community">커뮤니티</Nav.Link>
              <Nav.Link as={Link} to="/QnA">QnA {username}</Nav.Link>
            </Nav>
            <Nav>
              <span className="user-name">{username}</span>
              <Nav.Link onClick={handleLogout} className="logout-link">
                로그아웃
              </Nav.Link>
              <Nav.Link as={Link} to={{ pathname: '/MyPage', state: { username: username } }}>
                마이페이지
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarElements2;