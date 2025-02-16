import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { transactionProp } from "../../pages/Transaction/Transaction";

interface PotsProp{
    name: string;
    target: number;
    total: number;
    theme: string;
}

interface BudgetProp{
    category: string;
    maximum: number;
    theme: string;
}
interface BalanceProp{
    current: string;
    income: string;
    expenses: string;
}
interface dataProp{
    balance:BalanceProp;
    transactions: transactionProp[];
    budgets: BudgetProp[];
    pots: PotsProp[];

}

interface initialStateProp{
    isLoading: boolean;
    data:dataProp;
    error: string | null;
}

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
            return rejectWithValue(error.message||"something went wrong")
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
