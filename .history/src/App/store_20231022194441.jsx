import { configureStore } from '@reduxjs/toolkit';

import { postsSlice } from '../features/posts/postsSlice';
import { subredditsSlice } from '../features/subreddit/subredditsSlice';

const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        subreddits: subredditsSlice.reducer,
    },
});

export default store;