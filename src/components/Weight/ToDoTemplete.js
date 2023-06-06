import React from 'react'
import "./ToDoTemplate.scss";

const ToDoTemplete = ({children}) => {
  return (
    <div className="TodoTemplate">
        <div className="app-title">무게관리</div>
        <div className="content">{children}</div>
    </div>
)
}

export default ToDoTemplete