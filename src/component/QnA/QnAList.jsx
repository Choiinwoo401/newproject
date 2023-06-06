import React from "react";
import Card from 'react-bootstrap/Card';

function QnAList(props) {
    return (
        <Card bg="Light"
            key="Light"
            text="dark"
            style={{
                marginTop: "10px",
            }}
        >
            <Card.Link href="/QnA/QnAPage" style={{
                textDecoration: "none",
                color: "#222222",
            }}>
                <Card.Body>
                    <span style={{
                        marginRight: "1%"
                    }}>{props.number}</span>
                    <span>{props.title}</span>
                    <span style={{
                        float:"right",
                    }}>{props.id}</span>
                </Card.Body>
            </Card.Link>
        </Card>
    )
}

export default QnAList; 