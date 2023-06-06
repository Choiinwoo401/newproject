import React from "react";


function CommuComment(props) {
    return (
        <div>
            <div>
                <div>
                    <span style={{
                        margin: "1%",
                    }}>{props.number}</span>
                    <span>{props.comment}</span><span style={{
                        float: "right",
                    }}>{props.id}</span>
                </div>
            </div>
        </div>
    )
}

export default CommuComment;