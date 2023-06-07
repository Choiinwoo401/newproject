import React, { useState, useCallback } from 'react';
import './ToDoInsert.scss';
import { MdAdd } from 'react-icons/md';

const ToDoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Adding 1 because month is zero-based
      const day = currentDate.getDate();

      onInsert(value, year, month, day);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input onChange={onChange} value={value} placeholder="무게를 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default ToDoInsert;