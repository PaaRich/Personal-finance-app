import { createSlice } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { budgetCollectionRef } from "../../../firebase/firestore"; // Update to the correct Firestore collection reference
import { onSnapshot } from "firebase/firestore";

// Define initial state
interface BudgetState {
  isLoading: boolean;
  data: DocumentData[];
  error: string | null;
}

const initialState: BudgetState = {
  isLoading: false,
  data: [],
  error: null,
};

// Redux Slice
const budgetSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setBudgets: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Actions
export const { setLoading, setBudgets, setError } = budgetSlice.actions;

// Listener Function for Real-Time Updates
export const listenToBudgets = () => (dispatch: any) => {
  dispatch(setLoading()); // Set loading state
  try {
    onSnapshot(budgetCollectionRef, (snapshot) => {
      const budgets: DocumentData[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setBudgets(budgets)); // Update state with real-time data
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(setError(error.message || "Something went wrong"));
    } else {
      dispatch(setError("Something went wrong"));
    }
  }
};

export default budgetSlice.reducer;

