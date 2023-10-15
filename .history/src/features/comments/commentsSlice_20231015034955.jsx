import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: [],
    isLoading: false,
    error: null,
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getCommentsStart(state) {
            state.isLoading = true;
        },
        getCommentsSuccess(state, action) {
            state.isLoading = false;
            state.comments = action.payload;
        },
        getCommentsFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getCommentsStart, getCommentsSuccess, getCommentsFailure } = commentsSlice.actions;

export default commentsSlice.reducer;