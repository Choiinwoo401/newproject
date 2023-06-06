
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

import CommuPost from './CommuPost';
import CommuComment from "./CommuComment";
import NavbarElements from "../../components/Navbar/NavbarElements";
function CommuPage(props) {
    return (
        <div>
            <div style={{
                width: "70%",
                margin: "0 auto",
            }}>
                <CommuPost 
                title="제 귀여운 도마뱀 좀 보세요"
                id="goodman"
                img="https://m.더쥬.com/web/product/big/202208/e378ae085daf5857bd4ef03184557626.jpg" 
                content="얼마전에 새로 데리고 온 친구 입니다 귀엽게 생겼죠..^^"
                />
                
                <div style={{
                    width: "80%",
                    margin: "0 auto",
                }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <CommuComment 
                            number="1"
                            comment="정말 귀엽네요"
                            id="richman" />
                            </ListGroup.Item>
                        <ListGroup.Item><CommuComment 
                            number="2"
                            comment="어디서 데려오셨나용"
                            id="veryvery" />
                            </ListGroup.Item>
                        <ListGroup.Item><CommuComment 
                            number="3"
                            comment="헉 우리집 귀염둥이랑 똑같이 생겼네요"
                            id="도마뱀조아" /></ListGroup.Item>
                        <ListGroup.Item><CommuComment 
                            number="4"
                            comment="굿이에요"
                            id="그저굿" /></ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    )

}

export default CommuPage;