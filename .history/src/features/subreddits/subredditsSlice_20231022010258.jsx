import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        try {
            const response = await fetch('https://www.reddit.com/subreddits.json');
            const json = await response.json();

            const subreddits = json.data.children;
            console.log("subredditsSlice.jsx - subreddits: " + subreddits);

            return subreddits;
        } catch (error) {
            console.error(error);
            throw Error;
        }
    }
)

const initialState = {
    subreddits: [],
    isLoading: false,
    error: null,
};

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
    //     getSubredditsStart(state) {
    //         state.isLoading = true;
    //     },
    //     getSubredditsSuccess(state, action) {
    //         state.isLoading = false;
    //         state.subreddits = action.payload;
    //     },
    //     getSubredditsFailure(state, action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    },
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
                    state.error = action.payload;
                }
            );
    }
});

export const { getSubredditsStart, getSubredditsSuccess, getSubredditsFailure } = subredditsSlice.actions;

export default subredditsSlice.reducer;