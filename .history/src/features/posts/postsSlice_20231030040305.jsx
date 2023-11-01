import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (subreddit = 'popular') => {
        try {
            const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);

            const posts = response.data.data.children.map(post => post.data);

            console.group('posts/fetchPosts');
            console.dir(posts);
            console.groupEnd();

            const postsWithComments = posts.map(post => ({
                ...post,
                showingComments: false,
                comments: [],
                loadingComments: false,
                commentsError: false,
            }));

            return postsWithComments;
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
            const response = await axios.get(`https://www.reddit.com/comments/${postId}.json`);

            /*****
             * Filters out any comments that have a kind of 'more' from the response data.
             * @param {Array} response.data[1].data.children - An array of comments.
             * @returns {Array} - An array of comments without any comments that have a kind of 'more'.
             *****/
            const comments = response.data[1].children.filter(comment => comment.kind !== 'more').map(post => post.data);

            console.group('posts/fetchComments');
            console.dir(comments);
            console.groupEnd();

            return comments;
        } catch (error) {
            console.error(error);
            throw new Error("Oh no, An error occurred!  Please refresh the page and try again.");
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
        },
        toggleShowingComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
            state.searchTerm = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchPosts.pending, (state) => {
                    state.isLoading = true;
                    state.error = null;
                    state.searchTerm = '';
                }
            )
            .addCase(
                fetchPosts.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.posts = action.payload;
                    state.error = null;
                    state.searchTerm = '';
                }
            )
            .addCase(
                fetchPosts.rejected, (state, action) => {
                    state.posts = [];
                    state.isLoading = false;
                    state.error = action.payload;
                    state.searchTerm = '';
                }
            )
            .addCase(
                fetchComments.pending, (state, action) => {
                    // If we're hiding comments, don't fetch the comments.
                    state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;

                    if(!state.posts[action.payload].showingComments) {
                        return;
                    }
                    state.posts[action.payload].loadingComments = true;
                    state.posts[action.payload].error = false;
                    state.searchTerm = '';
                }
            )
            .addCase(
                fetchComments.fulfilled, (state, action) => {
                    state.posts[action.payload.index].loadingComments = false;
                    state.posts[action.payload.index].comments = action.payload.comments;
                    state.searchTerm = '';
                }
            )
            .addCase(
                fetchComments.rejected, (state, action) => {
                    state.posts[action.payload].loadingComments = false;
                    state.posts[action.payload].error = action.error?.message || action.payload || "Oh no, An error occurred while fetching the comments for this!  Please refresh the page and try again.";
                    state.searchTerm = '';
                }
            )
            .addDefaultCase((state, action) => {
                if(action.type !== '@@INIT' && action.type.startsWith('posts/')) {
                    state.isLoading = false;
                    state.error = `Unrecognized action: ${action.type}` + '\n' + (`action.error?.message: ${action.error?.message}` || `action.payload: ${action.payload}`);
                    state.searchTerm = '';
                }
            });
    }

});

const selectPostsState = state => state.posts;

export const selectPostComments = postId => createSelector(
    selectPostsState,
    postsState => {
        const post = postsState.posts.find(post => post.id === postId);
        return post ? post.comments : [];
    }
);

export const selectPostCommentsError = postId => createSelector(
    selectPostsState,
    postsState => {
        const post = postsState.posts.find(post => post.id === postId);
        return post ? post.commentsError : false;
    }
);

export const selectPostCommentsLoading = postId => createSelector(
    selectPostsState,
    postsState => {
        const post = postsState.posts.find(post => post.id === postId);
        return post ? post.loadingComments : false;
    }
);

export const { setSearchTerm, toggleShowingComments } = postsSlice.actions;

export const selectPosts = state => state.posts.posts;
export const selectIsLoading = state => state.posts.isLoading;
export const selectError = state => state.posts.error;

export default postsSlice.reducer;