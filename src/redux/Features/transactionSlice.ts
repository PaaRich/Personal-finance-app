import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialStateProp, dataProp } from "../../../types";


const initialState:initialStateProp = {
    isLoading: false,
    data:{} as dataProp,
    error: " ",
}

// 'https://jsonplaceholder.typicode.com/posts'
export const fetchTransaction = createAsyncThunk(

    'transaction/fetchTransaction', async (_,{rejectWithValue}) => {
        try {
        const response = await fetch('/data.json');
            if (!response.ok) {
                throw new Error("Couldn't fetch")
            }
        const data = await response.json();
            return data;
            
        }
        catch (error:unknown) {
            if (error instanceof Error) {
                return rejectWithValue(error.message || "something went wrong");
            }
            return rejectWithValue("something went wrong");
        }   
});

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransaction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message as string;
            })
    }
})

export default transactionSlice.reducer;
