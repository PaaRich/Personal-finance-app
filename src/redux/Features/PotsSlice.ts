import { createSlice } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
// Ensure the correct import path

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
export default potsSlice.reducer;

// Thunk: Listen to Firestore real-time updates

// export const listenToPots = () => (dispatch: AppDispatch) => {
//   dispatch(setLoading(true));

//   const unsubscribe = onSnapshot(
//     budgetCollectionRef,
//     (snapshot: QuerySnapshot<DocumentData>) => {
//       const pots = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       dispatch(setPots(pots));
//     },(error) => {
//       dispatch(setError(error.message));
//     }
//   );

//   return unsubscribe; // Return unsubscribe function for cleanup
// };


