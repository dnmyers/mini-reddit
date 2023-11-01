import { configureStore } from '@reduxjs/toolkit';

import { postsSlice } from '../features/posts/postsSlice';
import { subredditsSlice } from '../features/subreddits/subredditsSlice';
import { commentsSlice } from '../features/comments/commentsSlice';

const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        subreddits: subredditsSlice.reducer,
        comments: commentsSlice.reducer,
    },
    devTools: {
        trace: true,
    }
});

export default store;