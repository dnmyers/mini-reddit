import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    comments: [],
    isLoading: false,
    error: null,
};

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (postId) => {
        try {
            const response = await axios.get(`https://www.reddit.com/comments/${postId}.json?limit=10`);


            /*****
             * Filters out any comments that have a kind of 'more' from the response data.
             * @param {Array} response.data[1].data.children - An array of comments.
             * @returns {Array} - An array of comments without any comments that have a kind of 'more'.
             *****/
            const comments = response.data[1].data.children.filter(comment => comment.kind !== 'more');

            return comments;
        } catch (error) {
            console.error(error);
            return "Oh no, An error occurred!  Please refresh the page and try again.";
        }
    }
)

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchComments.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addCase(
                fetchComments.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.comments = action.payload;
                    state.error = null;
                }
            )
            .addCase(
                fetchComments.rejected, (state, action) => {
                    state.comments = [];
                    state.isLoading = false;
                    state.error = action.payload;
                }
            );
    }
});

export const { getCommentsStart, getCommentsSuccess, getCommentsFailure } = commentsSlice.actions;

export const selectComments = state => state.comments.comments;
export const selectIsLoading = state => state.comments.isLoading;
export const selectError = state => state.comments.error;

export default commentsSlice.reducer;