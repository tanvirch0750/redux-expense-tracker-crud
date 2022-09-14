import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addTransactions,
  deleteTransactions,
  editTransactions,
  getTransactions,
} from './transactionAPI';

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: '',
  editing: false,
};

// async thunks functions
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);

export const createTransaction = createAsyncThunk(
  'transactions/createTransaction',
  async (data) => {
    const transaction = await addTransactions(data);
    return transaction;
  }
);

export const changeTransaction = createAsyncThunk(
  'transactions/changeTransaction',
  async ({ id, data }) => {
    const transaction = await editTransactions(id, data);
    return transaction;
  }
);

export const removeTransaction = createAsyncThunk(
  'transactions/removeTransaction',
  async (id) => {
    const transaction = await deleteTransactions(id);
    return transaction;
  }
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInactive: (state) => {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      // get transactions
      .addCase(fetchTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error.message;
        state.transactions = [];
      })
      //  create transaction
      .addCase(createTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions.push(action.payload);
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error.message;
      })
      // change Transaction
      .addCase(changeTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;

        const indexUpdate = state.transactions.findIndex(
          (t) => t.id === action.payload.id
        );
        state.transactions[indexUpdate] = action.payload;
      })
      .addCase(changeTransaction.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error.message;
      })
      //  delete Transaction
      .addCase(removeTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = state.transactions.filter(
          (t) => t.id !== action.meta.arg
        );
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default transactionSlice.reducer;
export const { editActive, editInactive } = transactionSlice.actions;
