import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux.hooks';
import { Loader } from '../loader/Loader';
import { SortMenu } from '../sortMenu/SortMenu';
import styles from './layout.module.scss';

export const Layout: React.FC = () => {
  const { error, isLoading } = useAppSelector((store) => store.userReducer);
  return (
    <div className={styles.wrapper}>
      <aside>
        <SortMenu />
      </aside>

      <main>
        {isLoading && <Loader />}
        {error && <div>{error}</div>}
        {!isLoading && !error && <Outlet />}
      </main>
    </div>
  );
};
