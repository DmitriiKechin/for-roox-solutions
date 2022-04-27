import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LayoutContainer } from './components/layout/LayoutContainer';
import { MainPageContainer } from './page/mainPage/MainPageContainer';
import { NotFoundPage } from './page/notFoundPage/NotFoundPage';
import { UserPageContainer } from './page/userPage/UserPageContainer';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutContainer />}>
        <Route index element={<MainPageContainer />} />
        <Route path="users/:id" element={<UserPageContainer />} />
        <Route path="users" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
