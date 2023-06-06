import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import React from "react";

function Main(props) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">RIQ</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#info">정보</Nav.Link>
                            <Nav.Link href="#trade">거래</Nav.Link>
                            <Nav.Link href="#commu">커뮤니티</Nav.Link>
                            <Nav.Link href="#QnA">QnA</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#signin">로그인</Nav.Link>
                            <Nav.Link href="#signup">회원가입</Nav.Link>
                            <Nav.Link href="#mypage">마이페이지</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{
                width: "70%",
                height: "70%",
                margin: "0 auto",
                postition: "relative",
            }}>
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}>
                <div style={{
                    display: "flex",
                }}>
                <Card style={{
                    width: "400px",
                    height: "300px",
                    margin: "20px",
                }}className="bg-dark text-white">
                    <Card.Img style={{
                        width: "100%",
                        height: "100%",
                    }}src="https://m.petinzooshop.com/web/product/medium/202112/bcc63c62c303ccba8054f172df6e43e9.jpg" />
                    <Card.ImgOverlay>
                        <Card.Title style={{
                            fontWeight: "bold",
                            color: "black",
                        }}>정보</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card style={{
                    width: "400px",
                    height: "300px",
                    margin: "20px",
                }}className="bg-dark text-white">
                    <Card.Img style={{
                        width: "100%",
                        height: "100%",
                    }}src="https://m.더쥬.com/web/product/big/202212/b87b5ae42d28668752daa32d3f96774d.jpg" />
                    <Card.ImgOverlay>
                        <Card.Title style={{
                            fontWeight: "bold",
                            color: "black",
                        }}>거래</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div style={{
                    display: "flex",
                }}>
                <Card style={{
                    width: "400px",
                    height: "300px",
                    margin: "20px",
                }}className="bg-dark text-white">
                    <Card.Img style={{
                        width: "100%",
                        height: "100%",
                    }}src="https://www.popco.net/zboard/data/dica_forum_panasonic/2018/05/17/17606681335afc480f23961.jpg" />
                    <Card.ImgOverlay>
                        <Card.Title style={{
                            fontWeight: "bold",
                            color: "black",
                        }}>커뮤니티</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <Card style={{
                    width: "400px",
                    height: "300px",
                    margin: "20px",
                }}className="bg-dark text-white">
                    <Card.Img style={{
                        width: "100%",
                        height: "100%",
                    }}src="https://cdn-pro-web-216-165.cdn-nhncommerce.com/cocktailteam_godomall_com/data/goods/19/01/03/1000001557/1000001557_detail_044.jpg" />
                    <Card.ImgOverlay>
                        <Card.Title style={{
                            fontWeight: "bold",
                            color: "black",
                        }}>QnA</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Main;