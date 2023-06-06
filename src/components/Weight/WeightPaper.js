import React, {useState, useRef,useCallback } from 'react'
import TodoList from './TodoList';
import ToDoInsert from './ToDoInsert';
import ToDoTemplete from './ToDoTemplete';
import ToDoEdit from './ToDoEdit';

const WeightPaper = () => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          text: '400g',
          checked: true,
        },
        {
          id: 2,
          text: '600g',
          checked: true,
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
    
      const onInsert = useCallback((text) => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
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
    <div>
    <ToDoTemplete>
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
    </ToDoTemplete></div>
  )
}

export default WeightPaper;