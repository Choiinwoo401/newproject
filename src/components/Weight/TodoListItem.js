import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

function ToDoListItem({
  todo,
  onRemove,
  onToggle,
  onChangeSelectedTodo,
  onInsertToggle,
  style,
}) {
  const { id, text, checked, year, month, day, value } = todo;

  const formattedDate = `${year}-${month}-${day}`;

  // Append 'g' to the value
  const formattedValue = `${value}g`;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <li className="TodoListItem">
        <div
          className={cn('checkbox', { checked: checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{formattedValue}</div> {/* Use formattedValue instead of text */}
        </div>
        <div
          className="edit"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          <MdModeEditOutline />
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
        <div className="date">{formattedDate}</div> {/* Render the formatted date */}
      </li>
    </div>
  );
}
export default React.memo(ToDoListItem);