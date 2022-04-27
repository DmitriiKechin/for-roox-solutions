import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getErrorMessage } from '../../../helpers/function';
import { IUser } from '../../../types/user';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      await delay(1000);
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      return response.data;
    } catch (e) {
      const message = getErrorMessage(e);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
