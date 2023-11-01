import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (subreddit = 'popular') => {
        try {
            const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);

            const posts = response.data.data.children;

            return posts;
        } catch (error) {
            console.error(error);
            throw Error;
        }
    }
);

export const fetchComments = createAsyncThunk(
    'posts/fetchComments',
    async (postId) => {
        try {
            const response = await axios.get(`https://www.reddit.com/comments/${postId}.json?limit=10`);

            /*****
             * Filters out any comments that have a kind of 'more' from the response data.
             * @param {Array} response.data[1].data.children - An array of comments.
             * @returns {Array} - An array of comments without any comments that have a kind of 'more'.
             *****/
            const comments = response.data[1].children.filter(comment => comment.kind !== 'more');

            return comments;
        } catch (error) {
            console.error(error);
            return "Oh no, An error occurred!  Please refresh the page and try again.";
        }
    }
)

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
    searchTerm: '',
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchPosts.pending, (state) => {
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
            )
            .addCase(
                fetchComments.pending, (state) => {
                    state.isLoading = true;
                    state.error = false;
                    // If we're hiding comments, don't fetch the comments.
                    state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
                    state.searchTerm = '';
            )
            .addCase(
                fetchComments.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.posts[action.payload.index].data.comments = action.payload.comments;
                }
            )
    }

});

export const { setSearchTerm } = postsSlice.actions;

export const selectPosts = state => state.posts.posts;
export const selectIsLoading = state => state.posts.isLoading;
export const selectError = state => state.posts.error;

export default postsSlice.reducer;