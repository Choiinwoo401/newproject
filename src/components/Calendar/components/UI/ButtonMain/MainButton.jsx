import React from 'react';
import styles from './MainButton.module.scss';

const MainButton = ({ children, className, onClick }) => {
  return (
    <button
      className={className ? [styles.btnMain, className].join(' ') : styles.btnMain}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;