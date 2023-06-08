import React, {useState, useRef,useCallback } from 'react'
import TodoList from './TodoList';
import ToDoInsert from './ToDoInsert';
import ToDoTemplete from './ToDoTemplete';
import ToDoEdit from './ToDoEdit';
import WeightGraph from './WeightGraph';
import './Weight.css'
const WeightPaper = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '100',
      checked: true,
      year: 2022,
      month: 12,
      day: 27,
      value: 100,
    },
    {
      id: 2,
      text: '1400',
      checked: true,
      year: 2023,
      month: 1,
      day: 8,
      value: 1400,
    },
  ]);

  
      const [selectedTodo, setSelectedTodo] = useState(null);
      const [insertToggle, setInsertToggle] = useState(false);
    
      const nextId = useRef(4);
      const onInsertToggle = useCallback(() => {
        if (selectedTodo) {
          setSelectedTodo((selectedTodo) => null);
        }
        setInsertToggle((prev) => !prev);
      }, [selectedTodo]);
    
      const onChangeSelectedTodo = (todo) => {
        setSelectedTodo((selectedTodo) => todo);
      };
    
      const onInsert = useCallback((value) => {
        const currentDate = new Date();
        const todo = {
          id: nextId.current,
          text: `${value}g`,
          checked: false,
          year: currentDate.getFullYear(),
          month: currentDate.getMonth() + 1,
          day: currentDate.getDate(),
          value: parseInt(value),
        };
    
        setTodos((todos) => todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
        nextId.current++; //nextId 1씩 더하기
      }, []);
    
      const onRemove = useCallback((id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
      }, []);
      const onUpdate = useCallback(
        (id, text) => {
          onInsertToggle();
    
          setTodos((todos) =>
            todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
          );
        },
        [onInsertToggle],
      );
      const onToggle = useCallback((id) => {
        setTodos((todos) =>
          todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          ),
        );
      }, []);
    
    return (
      <div className="WeightPaper">
      <ToDoTemplete>
        <div className="content">
        <ToDoInsert onInsert={onInsert} />
        <TodoList
          todos={todos}
          onToggle={onToggle}
          onRemove={onRemove}
          onChangeSelectedTodo={onChangeSelectedTodo}
          onInsertToggle={onInsertToggle}
        />
        {insertToggle && (
          <ToDoEdit
            onInsert={onInsert}
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle}
            onUpdate={onUpdate}
            insertToggle={insertToggle}
          />
        )}
        </div>
        <div className="footer">
          <WeightGraph todos={todos} />
        </div>
      </ToDoTemplete>
    </div>
  )
}

export default WeightPaper;