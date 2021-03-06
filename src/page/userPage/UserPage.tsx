import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/input/Input';
import { IUserPage } from './types';
import styles from './userPage.module.scss';
import { Button } from '../../components/button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks';
import { userSlice } from '../../store/reducers/user/UserSlice';

export const UserPage: React.FC<IUserPage> = (props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const dispatch = useAppDispatch();
  const editUser = (isEdit: boolean) => {
    dispatch(userSlice.actions.editUser(isEdit));
  };
  const { isEditUser } = useAppSelector((store) => store.userReducer);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editUser(false);
    console.log('Отправлено:', JSON.stringify(props.userInfo));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Профиль пользоваетля</span>
        <Button
          onClick={() => {
            editUser(true);
          }}
          padding="6px 12px"
        >
          Редактировать
        </Button>
      </div>

      <form onSubmit={submitHandler} id="formUser" className={styles.form}>
        <Input
          required
          disabled={!isEditUser}
          name="Name"
          value={props.userInfo.name}
          changeHandler={(event) => {
            props.changeHandler(event, 'name', props.userInfo);
          }}
        />
        <Input
          required
          disabled={!isEditUser}
          name="User name"
          value={props.userInfo.userName}
          changeHandler={(event) => {
            props.changeHandler(event, 'userName', props.userInfo);
          }}
        />
        <Input
          required
          type="email"
          disabled={!isEditUser}
          name="E-mail"
          value={props.userInfo.email}
          changeHandler={(event) => {
            props.changeHandler(event, 'email', props.userInfo);
          }}
        />
        <Input
          required
          disabled={!isEditUser}
          name="Street"
          value={props.userInfo.street}
          changeHandler={(event) => {
            props.changeHandler(event, 'street', props.userInfo);
          }}
        />
        <Input
          required
          disabled={!isEditUser}
          name="City"
          value={props.userInfo.city}
          changeHandler={(event) => {
            props.changeHandler(event, 'city', props.userInfo);
          }}
        />
        <Input
          required
          disabled={!isEditUser}
          name="Zip code"
          value={props.userInfo.zipCode}
          changeHandler={(event) => {
            props.changeHandler(event, 'zipCode', props.userInfo);
          }}
        />
        <Input
          required
          disabled={!isEditUser}
          name="Phone"
          value={props.userInfo.phone}
          changeHandler={(event) => {
            props.changeHandler(event, 'phone', props.userInfo);
          }}
        />
        <Input
          required
          disabled={!isEditUser}
          name="Website"
          value={props.userInfo.webSite}
          changeHandler={(event) => {
            props.changeHandler(event, 'webSite', props.userInfo);
          }}
        />
        <Input
          disabled={!isEditUser}
          isTextArea
          name="Comment"
          value={props.userInfo.comment}
          changeHandler={(event) => {
            props.changeHandler(event, 'comment', props.userInfo);
          }}
        />
      </form>
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            editUser(false);
            goBack();
          }}
        >
          Назад
        </Button>
        <Button
          form="formUser"
          disabled={!isEditUser}
          type="submit"
          padding="5px 6px 5px 15px"
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};
