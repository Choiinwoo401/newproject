import React from "react";

function CommuPost(props) {
    return (
        <div>
            <div style={{
                width: "80%",
                margin: "0 auto",
            }}>
                <div>
                    <div style={{
                        marginTop: "10px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
                    }}></div>
                    <div>
                        <h2 style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}>{props.title}</h2>
                    </div>
                    <div style={{
                        textAlign: "right",
                    }}>
                        {props.id}
                    </div>
                    <div style={{
                        borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
                    }}></div>
                </div>
                <div style={{
                    width: "70%",
                }}>
                    <div style={{
                        margin: "10px",
                        marginBottom: "20px",
                    }} >
                        <div>
                            <img src={props.img} />
                        </div>
                        <div>
                            {props.content}
                        </div>
                    </div>
                </div>
                <div style={{
                        borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
                    }}></div>
            </div>

        </div>
    )
}

export default CommuPost;