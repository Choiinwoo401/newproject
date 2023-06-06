import React from "react";

import QnAQuestion from "./QnAQuestion";
import QnAAnswer from "./QnAAnswer";

function QnAPage (props) {
    return (
        <div>
            
            <div style={{
                width: "70%",
                margin: "0 auto",
            }}>
                <QnAQuestion 
                title="새로 입양을 했는데요..."
                id="goodman"
                img="https://m.petinzooshop.com/web/product/big/202112/57746595f426e36d47214ca678369e61.jpg" 
                content="이 친구가 얼마 정도로 자랄까요??? 이 친구에 맞는 집을 좀 사려는데요.."
                />

                <QnAAnswer
                id="더파충류샵"
                answer="종류를 보아하니 볼파이튼인데요. 파충류는 보통 ..."
                />
            </div>
        </div>
    )

}

export default QnAPage;

