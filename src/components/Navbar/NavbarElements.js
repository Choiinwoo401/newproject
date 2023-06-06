import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavbarElements = () => {
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
                            <Nav.Link href="/Login">로그인</Nav.Link>
                            <Nav.Link href="/SignUp">회원가입</Nav.Link>
                            <Nav.Link href="/MyPage">마이페이지</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
         </div>
  )
}

export default NavbarElements