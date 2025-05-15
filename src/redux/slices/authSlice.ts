import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface AuthState {
  accessToken: string | null;
  id: number | null;
  email: string | null;
  connected: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  accessToken: null,
  id: null,
  email: null,
  connected: false,
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    testLogin: (state, action: PayloadAction<{ accessToken: string; user: {id: number, email: string}}>) => {
      state.connected = true;
      state.accessToken = action.payload.accessToken;
      state.id = action.payload.user.id;
      state.email = action.payload.user.email;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.connected = false;
    },
  },
});

export const { testLogin, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default authSlice.reducer
