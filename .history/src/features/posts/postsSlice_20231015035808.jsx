import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

const getPostsAsync = createAsyncThunk(
    'posts/getPostsAsync',
    async () => {
        const response = await fetch('https://www.reddit.com/r/reactjs.json?limit=10');
        if (response.ok) {
            const json = await response.json();
            return json.data.children;
        }
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers: (builder) {
        builder.
            addCase: getsPostsAsync. (state, action) => {
                state.isLoading = true;
            },
        [getPostsAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        },
        [getPostsAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
});

export const { getPostsStart, getPostsSuccess, getPostsFailure } = postsSlice.actions;

export default postsSlice.reducer;