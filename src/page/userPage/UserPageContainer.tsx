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
    name: '',
    userName: '',
    email: '',
    street: '',
    city: '',
    zipCode: '',
    phone: '',
    webSite: '',
    comment: '',
  });

  const user: IUser | undefined = users.find(
    (user) => user.id.toString() === id
  );

  useEffect(() => {
    if (user) {
      setUserInfo({
        name: user.name,
        userName: user.username,
        email: user.email,
        street: user.address.street,
        city: user.address.city,
        zipCode: user.address.zipcode,
        phone: user.phone,
        webSite: user.website,
        comment: '',
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
