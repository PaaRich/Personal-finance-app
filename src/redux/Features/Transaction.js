import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    transaction: [],
    error:''
}

export const fetchTransaction = createAsyncThunk(
    'users/fetchTransaction', async () => {
        const response = await fetch('../../Utils/data.json');
        const data = response.json();
        return data;
    }
)

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransaction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.transaction = action.payload;
            })
            .addCase(fetchTransaction.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export default transactionSlice.reducer;