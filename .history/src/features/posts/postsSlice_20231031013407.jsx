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
            return error || 'Oh no, An error occurred while trying to fetch posts!  Please refresh the page and try again.';
        }
    }
);

export const fetchComments = createAsyncThunk(
    'posts/fetchComments',
    async ( id, index ) => {
        try {
            const response = await axios.get(`https://www.reddit.com/comments/${id}.json`);

            /*****
             * Filters out any comments that have a kind of 'more' from the response data.
             * @param {Array} response.data[1].data.children - An array of comments.
             * @returns {Array} - An array of comments without any comments that have a kind of 'more'.
             *****/
            const comments = response.data[1].children.filter(comment => comment.kind !== 'more').map(post => post.data);

            console.group('posts/fetchComments');
            console.dir(comments);
            console.groupEnd();

            return {id: id, index: index, comments: comments};
        } catch (error) {
            console.error(error);
            return { id: id, index: index, error: error };
        }
    }
);

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
    searchTerm: '',
    selectedSubreddit: 'popular',
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
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
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
                    console.log('fetchComments.pending: action: ', action);
                    // If we're hiding comments, don't fetch the comments.
                    state.posts[action.meta.arg.index].showingComments = !state.posts[action.meta.arg.index].showingComments;

                    if(!state.posts[action.meta.arg.index].showingComments) {
                        return;
                    }
                    state.posts[action.meta.arg.index].loadingComments = true;
                    state.posts[action.meta.arg.index].error = false;
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
                    console.log('fetchComments.rejected: action: ', action);
                    state.posts[action.meta.arg.index].loadingComments = false;
                    state.posts[action.meta.arg.index].error = action.error?.message || action.payload || "Oh no, An error occurred while fetching the comments for this!  Please refresh the page and try again.";
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

const selectPostsState = state => state.posts.posts;

export const selectPostShowingComments = postId => createSelector(
    selectPostsState,
    (postsState) => {
        const post = postsState.find(post => post.id === postId);
        return post ? post.showingComments : false;
    }
)

export const selectPostComments = postId => createSelector(
    selectPostsState,
    (postsState) => {
        const post = postsState.find(post => post.id === postId);
        return post ? post.comments : [];
    }
);

export const selectPostCommentsError = postId => createSelector(
    selectPostsState,
    (postsState) => {
        const post = postsState.find(post => post.id === postId);
        return post ? post.commentsError : false;
    }
);

export const selectPostCommentsLoading = postId => createSelector(
    selectPostsState,
    (postsState) => {
        const post = postsState.find(post => post.id === postId);
        return post ? post.loadingComments : false;
    }
);

export const { setSearchTerm, toggleShowingComments, setSelectedSubreddit } = postsSlice.actions;

export const selectPosts = state => state.posts.posts;
export const selectIsLoading = state => state.posts.isLoading;
export const selectError = state => state.posts.error;
export const selectSelectedSubreddit = state => state.posts.selectedSubreddit;
export const postShowingComments = state => state.posts.showingComments;
export const postComments = state => state.posts.comments;
export const postCommentsLoading = state => state.posts.loadingComments;
export const postCommentsError = state => state.posts.commentsError;

export default postsSlice.reducer;