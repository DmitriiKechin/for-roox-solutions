import React from 'react';
import styles from './input.module.scss';
import { IInput } from './types';

export const Input: React.FC<IInput> = ({
  value,
  disabled,
  name,
  isTextArea,
  changeHandler,
}) => {
  return (
    <div>
      <label>
        <div className={styles.name}>{name}</div>
        {isTextArea ? (
          <textarea
            className={styles.input + ' ' + styles.textArea}
            disabled={disabled}
            value={value}
            onChange={changeHandler}
          />
        ) : (
          <input
            className={styles.input}
            disabled={disabled}
            value={value}
            onChange={changeHandler}
          />
        )}
      </label>
    </div>
  );
};
