import { createSlice } from '@reduxjs/toolkit';

export const userName = createSlice({
  name: 'userName',
  initialState: "",
  reducers: {
    changeName: (state, action) => {
      return action.payload
    }
  }
})
export const {changeName } = userName.actions;

export default userName.reducer;