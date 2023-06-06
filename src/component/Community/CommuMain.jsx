import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import CommuList from "./CommuList";

function CommuMain(props) {
    return (
        <div>
            <div style={{
                width: "70%",
                margin: "0 auto",
            }}>
                <div style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                }}>
                    <h1>커뮤니티</h1>
                </div>
                <div style={{
                    borderBottom: "2px solid rgba(0, 0, 0, 1)",
                }}></div>
                <div style={{
                    marginTop: "10px"
                }}>
                    <CommuList 
                    number="4"
                    title="도마뱀 100마리째 입양입니다."
                    id="richman"
                    />
                    <CommuList 
                    number="3"
                    title="이녀석 왜이럴까요"
                    id="뱀마스터"
                    />
                    <CommuList 
                    number="2"
                    title="도와주세요"
                    id="viper"
                    />
                    <CommuList 
                    number="1"
                    title="제 귀여운 도마뱀 좀 보세요"
                    id="goodman"
                    />
                </div>

            </div>
        </div>
    )
}

export default CommuMain;
