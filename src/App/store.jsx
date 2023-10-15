import { configureStore } from '@reduxjs/toolkit';

import postsSlice from '../features/posts/postsSlice';

const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
    },
});

export default store;