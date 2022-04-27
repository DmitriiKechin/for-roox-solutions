import React from 'react';
import { ICard } from '../../components/card/types';
import { useAppSelector } from '../../hooks/redux.hooks';
import { MainPage } from './MainPage';

export const MainPageContainer: React.FC = () => {
  const { users } = useAppSelector((store) => store.userReducer);

  const cards: ICard[] = users.map((user) => {
    return {
      id: user.id,
      city: user.address.city,
      company: user.company.name,
      name: user.name,
    };
  });

  return <MainPage cards={cards} />;
};
