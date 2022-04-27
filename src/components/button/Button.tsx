import React from 'react';
import { IButton } from './types';
import styles from './button.module.scss';

export const Button: React.FC<IButton> = ({
  children,
  disabled = false,
  padding = '5px 16px',
  type,
  form,
  onClick,
}) => {
  let style = styles.button;

  if (type === 'submit') {
    style += ' ' + styles.submit;
  }

  return (
    <button
      form={form}
      type={type}
      disabled={disabled}
      className={style}
      style={{ padding: padding }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
