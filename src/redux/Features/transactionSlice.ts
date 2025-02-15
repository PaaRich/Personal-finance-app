import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

interface TransactionProp{
    avatar: string;
    name: string;
    category: string;
    date: string;
    amount: number;
    recurring:boolean
}
interface initialStateProp{
    isLoading: boolean;
    transaction: TransactionProp[];
    error: string | null;
    count: number;
}

const initialState:initialStateProp = {
    isLoading: false,
    transaction: [],
    error: " ",
    count:0
}

// 'https://jsonplaceholder.typicode.com/posts'
export const fetchTransaction = createAsyncThunk(

    'transaction/fetchTransaction', async (_,{rejectWithValue}) => {
        try {
        const response = await fetch('../../../public/data.json');
            if (!response.ok) {
                throw new Error("Couldn't fetch")
            }
        const data = await response.json();
        return data;
        }
        catch (error:unknown) {
            return rejectWithValue(error.message||"something went wrong")
        }   
});

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        increment: (state) => {
            state.count+=1;
        }
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
            .addCase(fetchTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message as string;
            })
    }
})

export default transactionSlice.reducer;
export const { increment } = transactionSlice.actions;
