import React from 'react';
import { Card } from '../../components/card/Card';
import styles from './mainPage.module.scss';
import { IMainPage } from './types';

export const MainPage: React.FC<IMainPage> = ({ cards }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Список пользователей</div>
      <div className={styles.items_card}>
        {cards.map((card) => (
          <Card
            id={card.id}
            city={card.city}
            company={card.company}
            name={card.name}
            key={card.id}
          />
        ))}
      </div>
      <div className={styles.totalSearch}>
        Найдено {cards.length} пользователей
      </div>
    </div>
  );
};
