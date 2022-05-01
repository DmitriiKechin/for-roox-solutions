import React from 'react';
import styles from './loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={styles['lds-roller']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
