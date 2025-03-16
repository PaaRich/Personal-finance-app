import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from "./Features/transactionSlice.ts";
import potsReducer from "./Features/PotsSlice.ts";

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    pots:potsReducer
  },
});

// Infer RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
