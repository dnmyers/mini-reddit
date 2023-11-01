import { configureStore } from '@reduxjs/toolkit';

import { postsSlice } from '../features/posts/postsSlice';
import { subredditsSlice } from '../features/subreddits/subredditsSlice';
// import { commentsSlice } from '../features/comments/commentsSlice';

const logger = storeAPI => next => action => {
    console.log('current state: ', storeAPI.getState());
    console.log('dispatching', action);
    const nextState = next(action);
    console.log('next state', nextState);
    return nextState;
}

const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        subreddits: subredditsSlice.reducer,
        // comments: commentsSlice.reducer,
    },
    devTools: {
        trace: true,
    }
});

export default store;