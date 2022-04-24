import React, { useEffect } from 'react';
import styles from './app.module.scss';
import { useAppDispatch, useAppSelector } from './hooks/redux.hooks';
import { fetchUsers } from './store/reducers/user/ActionCreators';

export const App = () => {
  const { users, error, isLoading } = useAppSelector(
    (store) => store.userReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <h1 className={styles.test}>My React and TypeScript App!!!</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div>{JSON.stringify(users)}</div>
    </>
  );
};
