import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

export function makeStore() {
  console.log('make store');

    return configureStore({
      reducer: { counter: counterReducer },
    })
  };
  
  const store = makeStore();

  export default store;
