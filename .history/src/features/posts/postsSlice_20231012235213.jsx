import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPostsStart(state) {
            state.isLoading = true;
        },
        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getPostsStart, getPostsSuccess, getPostsFailure } = postsSlice.actions;

export default postsSlice.reducer;