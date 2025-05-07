import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from "./Features/transactionSlice.ts";
import potsReducer from "./Features/PotsSlice.ts";
import budgetReducer from "./Features/BudgetSlice.ts";

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    pots: potsReducer,
    budgets:budgetReducer,
  },
});

// Infer RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
