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
  const style = disabled ? styles.input + ' ' + styles.disabled : styles.input;

  return (
    <div>
      <label>
        <div className={styles.name}>{name}</div>
        {isTextArea ? (
          <textarea
            className={style + ' ' + styles.textArea}
            disabled={disabled}
            value={value}
            onChange={changeHandler}
          />
        ) : (
          <input
            className={style}
            disabled={disabled}
            value={value}
            onChange={changeHandler}
          />
        )}
      </label>
    </div>
  );
};
