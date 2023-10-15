import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    subreddits: [],
    isLoading: false,
    error: null,
};

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        getSubredditsStart(state) {
            state.isLoading = true;
        },
        getSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        getSubredditsFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getSubredditsStart, getSubredditsSuccess, getSubredditsFailure } = subredditsSlice.actions;

export default subredditsSlice.reducer;