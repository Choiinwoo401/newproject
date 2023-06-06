import React from "react";
import Card from "react-bootstrap/Card";

function TradeCard(props) {
    return(
        <Card
            style={{ 
                width: '16rem',
                border: "1px solid grey", 
                boxShadow: "0px 5px 5px 0px rgba(50,50,50,0.4)",
                margin: "10px",
                padding: "10px",
                borderRadius: "15px",
            }}
        >
            <Card.Body>
                <Card.Img style={{
                    height: "180px",
                    width: "100%",
                }}
                variant="top" src={props.image} />
            </Card.Body>
            <Card.Body style={{  
            maxHeight: "200px",
            overflow: "hidden",
            }}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ fontSize: "20px" }}>{props.price}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="/Trade/TradePage">구매하기</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default TradeCard;