import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        try {
            const response = await axios.get('https://www.reddit.com/subreddits.json');

            let subreddits = response.data.data.children;

            const insert = (arr, index, newItem, a=[...arr]) => (a.splice(index, 0, newItem), a);
            subreddits = insert(subreddits, 1, {
                kind: 't5',
                data: {
                    icon_img: '',
                    display_name: 'popular',
                },
            });

            return subreddits;
        } catch (error) {
            console.error(error);
            return error.message ? error.message : error.response.data;
        }
    }
);

const initialState = {
    subreddits: [],
    isLoading: false,
    error: null,
};

export const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        setSelectedSubreddit: (state, action) => {
            state.subreddits = state.subreddits.map(subreddit => ({
                ...subreddit,
                data: {
                    ...subreddit.data,
                    selected: subreddit.data.display_name === action.payload,
                }
            }));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchSubreddits.pending, (state) => {
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
                    state.error = action.error?.message || action.payload;
                }
            )
            .addDefaultCase((state, action) => {
                if(action.type !== '@@INIT' && action.type.startsWith('subreddits/')) {
                    state.isLoading = false;
                    state.error = `Unrecognized action: ${action.type}` + '\n' + (`action.error?.message: ${action.error?.message}` || `action.payload: ${action.payload}`);
                }
            });
    }
});

export const selectSubreddits = state => state.subreddits.subreddits;
export const selectIsLoading = state => state.subreddits.isLoading;
export const selectError = state => state.subreddits.error;

export default subredditsSlice.reducer;