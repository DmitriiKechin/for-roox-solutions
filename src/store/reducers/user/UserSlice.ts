import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserState } from '../../../types/user';
import { fetchUsers } from './ActionCreators';

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: '',
  isEditUser: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<boolean>) => {
      state.isEditUser = action.payload;
    },
    updateUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
