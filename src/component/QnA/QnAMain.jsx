import React from "react";
import QnAList from "./QnAList";

function QnAMain(props) {
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
                    <h1>QnA</h1>
                </div>
                <div style={{
                    borderBottom: "2px solid rgba(0, 0, 0, 1)",
                }}></div>
                <div>
                    <QnAList
                    number="4"
                    title="좋은 거래처가 어디일까요??"
                    id="goodman"
                    />
                    <QnAList
                    number="3"
                    title="필요한 도구가 뭐가 있을까요?"
                    id="richman"
                    />
                    <QnAList
                    number="2"
                    title="탈피를 안합니다."
                    id="곤란한사람"
                    />
                    <QnAList
                    number="1"
                    title="새로 입양을 했는데요..."
                    id="goodman"
                    />
                </div>

            </div>
        </div>
    )
}

export default QnAMain;