import React from "react";
import Card from 'react-bootstrap/Card';

function QnAAnswer(props) {
    return (
        <div>
            <div style={{
                marginTop: "20px"
            }}>
                <Card
                    bg="Light"
                    key="Light"
                    text="dark"
                    style={{
                        width: "80%",
                        margin: "0 auto",
                    }}>
                    <Card.Header>답변자 : {props.id}</Card.Header>
                    <Card.Body>
                        <Card.Text>{props.answer}</Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default QnAAnswer;