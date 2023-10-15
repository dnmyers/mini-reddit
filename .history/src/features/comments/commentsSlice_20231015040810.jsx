import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    comments: [],
    isLoading: false,
    error: null,
};

const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (postId) => {
        try {
            const response = await axios.get(`https://www.reddit.com/comments/${postId}.json?limit=10`);

            const comments = response.data[1].data.children;

            return comments;
        } catch (error) {
            console.error(error);
            throw Error;
        }
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getCommentsStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        getCommentsSuccess(state, action) {
            state.isLoading = false;
            state.comments = action.payload;
            state.error = null;
        },
        getCommentsFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getCommentsStart, getCommentsSuccess, getCommentsFailure } = commentsSlice.actions;

export default commentsSlice.reducer;