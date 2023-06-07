import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const NavbarElements2 = ({ username, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
      onLogout(); // Call the onLogout function passed from the parent component
      localStorage.removeItem('userToken');
      navigate('/'); // Navigate to the home page
    };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">RIQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Information">정보</Nav.Link>
              <Nav.Link href="/Trade">거래</Nav.Link>
              <Nav.Link href="/Community">커뮤니티</Nav.Link>
              <Nav.Link href="/QnA">QnA</Nav.Link>
            </Nav>
            <Nav>
                <span className="user-name">{username}</span>            
                <Nav.Link onClick={handleLogout} className="logout-link">로그아웃 </Nav.Link>
              <Nav.Link href="/MyPage">마이페이지</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarElements2;