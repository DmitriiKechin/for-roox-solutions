import React from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.scss';
import { ICard } from './types';

export const Card: React.FC<ICard> = ({ id, city, company, name }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.item}>ФИО</span>{' '}
        <span className={styles.value}>{name}</span>
      </div>
      <div>
        <span className={styles.item}>город</span>{' '}
        <span className={styles.value}>{city}</span>
      </div>
      <div className={styles.space_between}>
        <div>
          <span className={styles.item}>компания</span>{' '}
          <span className={styles.value}>{company}</span>
        </div>
        <Link to={`/users/${id}`} className={styles.link}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};
