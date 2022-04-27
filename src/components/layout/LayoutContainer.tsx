import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { fetchUsers } from '../../store/reducers/user/ActionCreators';
import { Layout } from './Layout';

export function LayoutContainer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <Layout />;
}
