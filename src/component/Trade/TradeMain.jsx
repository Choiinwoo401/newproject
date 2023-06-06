
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

function TradeMain(props) {
    return (
        <div>
            <div style={{
                width: "70%",
                margin: "0 auto",
            }}>
                <div style={{
                    margin: "15px",
                    font: "30px 'Nanum Gothic'"
                }}>상품 상세 정보</div>
                <div style={{
                    borderBottom: "2px solid rgba(0, 0, 0, 1)",
                }}></div>
                <div style={{
                    position: "relative",
                    height: "400px",
                }}>
                    <div style={{
                        width: "60%",
                        height: "400px",
                        position: "relative",
                        float: "left",

                    }}>
                        <div style={{
                            width: "450px",
                            height: "350px",
                            backgroundImage: "url(https://cdn-pro-web-216-165.cdn-nhncommerce.com/cocktailteam_godomall_com/data/goods/19/01/03/1000001557/1000001557_detail_044.jpg)",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            border: "1px solid black",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",

                        }}>
                        </div>

                    </div>
                    <div style={{
                        width: "40%",
                        height: "400px",
                        position: "relative",
                        float: "right",

                    }}>
                        <div style={{
                            width: "90%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item><span style={{
                                    fontSize: "30px",
                                }}>볼파이튼 15g</span></ListGroup.Item>
                                <ListGroup.Item><span style={{
                                    fontSize: "20px",
                                    marginRight: "15%",
                                }}>판매가</span>
                                    <span
                                        style={{
                                            fontSize: "30px",
                                        }}>100000원</span></ListGroup.Item>
                                <ListGroup.Item><span style={{
                                    fontSize: "20px",
                                    marginRight: "15%",
                                }}>거래처명</span>
                                    <span
                                        style={{
                                            fontSize: "30px",
                                        }}>아이러브BAAM</span></ListGroup.Item>
                                <ListGroup.Item><span style={{
                                    fontSize: "20px",
                                    marginRight: "15%",
                                }}>전화번호</span>
                                    <span
                                        style={{
                                            fontSize: "30px",
                                        }}>070-1234-5678</span></ListGroup.Item>
                                <ListGroup.Item><span style={{
                                    fontSize: "20px",
                                    marginRight: "15%",
                                }}>거래처사이트</span>
                                    <span
                                        style={{
                                            fontSize: "20px",
                                        }}>Ilovebaam.com</span></ListGroup.Item>
                            </ListGroup>
                        </div>

                    </div>

                </div>
                <div style={{
                    borderBottom: "2px solid rgba(0, 0, 0, 1)",
                    marginBottom: "20px",
                }}></div>
            </div>
            
        </div>
    )
}

export default TradeMain;