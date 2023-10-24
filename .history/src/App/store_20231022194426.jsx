import { configureStore } from '@reduxjs/toolkit';

import { postsSlice } from '../features/posts/postsSlice';
import { subredditSlice } from '../features/subreddit/subredditSlice';

const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        subreddits: subredditSlice.reducer,
    },
});

export default store;