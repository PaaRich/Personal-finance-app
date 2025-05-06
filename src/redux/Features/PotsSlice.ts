import { createSlice } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { potsCollectionRef } from "../../../firebase/firestore";
import { onSnapshot } from "firebase/firestore";

// Define initial state
interface PotsState {
  isLoading: boolean;
  data: DocumentData[];
  error: string | null;
}

const initialState: PotsState = {
  isLoading: false,
  data: [],
  error: null,
};

// Redux Slice
const potsSlice = createSlice({
  name: "pots",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setPots: (state, action) => {
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
export const { setLoading, setPots, setError } = potsSlice.actions;

// Listener Function for Real-Time Updates
export const listenToPots = () => (dispatch: any) => {
  dispatch(setLoading()); // Set loading state
  try {
    onSnapshot(potsCollectionRef, (snapshot) => {
      const pots: DocumentData[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setPots(pots)); // Update state with real-time data
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch(setError(error.message || "Something went wrong"));
    } else {
      dispatch(setError("Something went wrong"));
    }
  }
};

export default potsSlice.reducer;

