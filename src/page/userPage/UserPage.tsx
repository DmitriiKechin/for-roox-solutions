import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input/Input';
import { IUserPage } from './types';
import styles from './userPage.module.scss';
import { Button } from '../../components/button/Button';
import { useAppDispatch } from '../../hooks/redux.hooks';
import { userSlice } from '../../store/reducers/user/UserSlice';

export const UserPage: React.FC<IUserPage> = (props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Профиль пользоваетля</span>
        <Button padding="6px 12px">Редактировать</Button>
      </div>
      <div className={styles.form}>
        <Input
          name="Name"
          value={props.userInfo.name}
          changeHandler={(event) => {
            props.changeHandler(event, 'name', props.userInfo);
          }}
        />
        <Input
          name="User name"
          value={props.userInfo.userName}
          changeHandler={(event) => {
            props.changeHandler(event, 'userName', props.userInfo);
          }}
        />
        <Input
          name="E-mail"
          value={props.userInfo.email}
          changeHandler={(event) => {
            props.changeHandler(event, 'email', props.userInfo);
          }}
        />
        <Input
          name="Street"
          value={props.userInfo.street}
          changeHandler={(event) => {
            props.changeHandler(event, 'street', props.userInfo);
          }}
        />
        <Input
          name="City"
          value={props.userInfo.city}
          changeHandler={(event) => {
            props.changeHandler(event, 'city', props.userInfo);
          }}
        />
        <Input
          name="Zip code"
          value={props.userInfo.zipCode}
          changeHandler={(event) => {
            props.changeHandler(event, 'zipCode', props.userInfo);
          }}
        />
        <Input
          name="Phone"
          value={props.userInfo.phone}
          changeHandler={(event) => {
            props.changeHandler(event, 'phone', props.userInfo);
          }}
        />
        <Input
          name="Website"
          value={props.userInfo.webSite}
          changeHandler={(event) => {
            props.changeHandler(event, 'webSite', props.userInfo);
          }}
        />
        <Input
          isTextArea
          name="Comment"
          value={props.userInfo.comment}
          changeHandler={(event) => {
            props.changeHandler(event, 'comment', props.userInfo);
          }}
        />
      </div>
      <div className={styles.buttons}>
        <Button onClick={goBack}>Назад</Button>
        <Button
          onClick={() => {
            dispatch(userSlice.actions.editUser(true));
          }}
          type="submit"
          padding="5px 6px 5px 15px"
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};
