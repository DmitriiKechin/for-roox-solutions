import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux.hooks';
import { IUser } from '../../types/user';
import { NotFoundPage } from '../notFoundPage/NotFoundPage';
import { IUserInfo, IUserPage } from './types';
import { UserPage } from './UserPage';

export const UserPageContainer: React.FC = () => {
  const { id } = useParams();
  const { users } = useAppSelector((store) => store.userReducer);
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    city: '',
    comment: '',
    email: '',
    name: '',
    userName: '',
    phone: '',
    street: '',
    webSite: '',
    zipCode: '',
  });

  const user: IUser | undefined = users.find(
    (user) => user.id.toString() === id
  );

  useEffect(() => {
    if (user) {
      setUserInfo({
        city: user.address.city,
        comment: '',
        email: user.email,
        name: user.name,
        userName: user.username,
        phone: user.phone,
        street: user.address.street,
        webSite: user.website,
        zipCode: user.address.zipcode,
      });
    }
  }, [user]);

  const changeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    valueName: string,
    userInfo: IUserInfo
  ) => {
    setUserInfo({ ...userInfo, [valueName]: event.currentTarget.value });
  };

  const props: IUserPage = {
    userInfo,
    changeHandler,
  };

  return (
    <>
      {user && <UserPage {...props} />}
      {!user && <NotFoundPage />}
    </>
  );
};
