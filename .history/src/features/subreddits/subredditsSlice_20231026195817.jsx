import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        try {
            const response = await axios.get('https://www.reddit.com/subreddits.json');

            const subreddits = response.data.data.children;

            // console.group("subredditsSlice.jsx - fetchSubreddits()")
            // console.dir(subreddits);
            // console.groupEnd();

            return subreddits;
        } catch (error) {
            console.error(error);
            return error.message ? error.message : error.response.data;
        }
    }
);

const initialState = {
    subreddits: [
        // {
        //     kind: 't5',
        //     data:
        // }
    ],
    isLoading: false,
    error: null,
};

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchSubreddits.pending, (state, _action) => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addCase(
                fetchSubreddits.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.subreddits = action.payload;
                    state.error = null;
                }
            )
            .addCase(
                fetchSubreddits.rejected, (state, action) => {
                    state.subreddits = [];
                    state.isLoading = false;
                    state.error = action.error?.messageaction.payload;
                }
            );
    }
});

export const selectSubreddits = state => state.subreddits.subreddits;
export const selectIsLoading = state => state.subreddits.isLoading;
export const selectError = state => state.subreddits.error;

export default subredditsSlice.reducer;