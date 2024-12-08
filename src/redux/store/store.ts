import { configureStore } from '@reduxjs/toolkit';
import cityReducer from '../reducers/cityReducer';
import { saveStateToLocalStorage } from '../../utils/localStorageUtils';

const store = configureStore({
  reducer: {
    cities: cityReducer,
  },
});

// Subscribe to store changes and save to local storage
store.subscribe(() => {
  saveStateToLocalStorage(store.getState().cities);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
