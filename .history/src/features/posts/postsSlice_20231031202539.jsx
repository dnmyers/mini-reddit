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
                commentsShowing: false,
                comments: [],
                commentsLoading: false,
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
    async ( postInfo ) => {
        const { id, index } = postInfo;

        try {
            const response = await axios.get(`https://www.reddit.com/comments/${id}.json`);

            /*****
             * Filters out any comments that have a kind of 'more' from the response data.
             * @param {Array} response.data[1].data.children - An array of comments.
             * @returns {Array} - An array of comments without any comments that have a kind of 'more'.
             *****/
            const comments = response.data[1].data.children.filter(comment => comment.kind !== 'more').map(post => post.data);

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
        toggleCommentsShowing(state, action) {
            if(state.posts[action.payload].comments.length === 0) {
                return;
            }

            state.posts[action.payload].commentsShowing = !state.posts[action.payload].commentsShowing;
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
                    state.posts[action.meta.arg.index].commentsShowing = !state.posts[action.meta.arg.index].commentsShowing;

                    if(!state.posts[action.meta.arg.index].commentsShowing) {
                        return;
                    }
                    state.posts[action.meta.arg.index].commentsLoading = true;
                    state.posts[action.meta.arg.index].error = false;
                    state.searchTerm = '';
                }
            )
            .addCase(
                fetchComments.fulfilled, (state, action) => {
                    state.posts[action.payload.index].commentsLoading = false;
                    state.posts[action.payload.index].comments = action.payload.comments;
                    state.searchTerm = '';
                }
            )
            .addCase(
                fetchComments.rejected, (state, action) => {
                    state.posts[action.meta.arg.index].commentsLoading = false;
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

// export const selectPostCommentsShowing = postId => createSelector(
//     selectPostsState,
//     (postsState) => {
//         const post = postsState.find(post => post.id === postId);
//         return post ? post.commentsShowing : false;
//     }
// )

// export const selectPostComments = postId => createSelector(
//     selectPostsState,
//     (postsState) => {
//         const post = postsState.find(post => post.id === postId);
//         return post ? post.comments : [];
//     }
// );

// export const selectPostCommentsError = postId => createSelector(
//     selectPostsState,
//     (postsState) => {
//         const post = postsState.find(post => post.id === postId);
//         return post ? post.commentsError : false;
//     }
// );

// export const selectPostCommentsLoading = postId => createSelector(
//     selectPostsState,
//     (postsState) => {
//         const post = postsState.find(post => post.id === postId);
//         return post ? post.commentsLoading : false;
//     }
// );

export const { setSearchTerm, toggleCommentsShowing, setSelectedSubreddit } = postsSlice.actions;

export const selectPosts = state => state.posts.posts;
export const selectIsLoading = state => state.posts.isLoading;
export const selectError = state => state.posts.error;
export const selectSelectedSubreddit = state => state.posts.selectedSubreddit;
export const postCommentsShowing = state => state.posts.commentsShowing;
export const postComments = state => state.posts.comments;
export const postCommentsLoading = state => state.posts.commentsLoading;
export const postCommentsError = state => state.posts.commentsError;

export default postsSlice.reducer;