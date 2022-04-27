import { userSlice } from '../store/reducers/user/UserSlice';
import { IUser } from '../types/user';
import { useAppDispatch, useAppSelector } from './redux.hooks';

type SortValue = 'city' | 'company';

export const useSort = (): ((sortValue: SortValue) => void) => {
  const { users } = useAppSelector((state) => state.userReducer);
  const usersForSort = [...users];
  const dispatch = useAppDispatch();
  const updateUsers = (users: IUser[]) => {
    dispatch(userSlice.actions.updateUsers(users));
  };

  const sort = (sortValue: SortValue) => {
    switch (sortValue) {
      case 'city':
        usersForSort.sort((a, b) => (a.address.city > b.address.city ? 1 : -1));
        updateUsers(usersForSort);
        return;
      case 'company':
        usersForSort.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
        updateUsers(usersForSort);
        return;
    }
  };
  return sort;
};
