// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getDocs,collection } from "firebase/firestore";
// import db  from "../../../firebase/firestore";

// const initialState = {
//     isLoading: true,
//     data: [],
//     error:''
// }

//     const collectionRef = collection(db, "pots");
// export const fetchPots = createAsyncThunk(


//     'pots/fetchPots', async (_,{rejectWithValue}) => {
//         try {
//         const response = await getDocs(collectionRef);
//             if (!response.ok) {
//                 throw new Error("Couldn't fetch")
//             }
//         const data = await response.json();
//         return data;
//         }
//         catch (error:unknown) {
//             return rejectWithValue(error.message||"something went wrong")
//         }   
// });