import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        try {
            const response = await axios.get('https://www.reddit.com/r/popular.json?limit=10');

            const posts = response.data.children;

            return posts;
        } catch (error) {
            console.error(error);
            throw Error;
        }
    }
);

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchPosts.pending, (state, _action) => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addCase(
                fetchPosts.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.posts = action.payload;
                    state.error = null;
                }
            )
            .addCase(
                fetchPosts.rejected, (state, action) => {
                    state.posts = [];
                    state.isLoading = false;
                    state.error = action.payload;
                }
            );
    }

});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } = postsSlice.actions;

export const selectPosts = state => state.posts.posts;
export const selectIsLoading = state => state.posts.isLoading;
export const selectError = state => state.posts.error;

export default postsSlice.reducer;