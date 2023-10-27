import { useEffect } from 'react';

import { fetchPosts } from '../features/posts/postsSlice';

export const useSelectedSubreddit = (selectedSubreddit, fetchPosts) => {
    useEffect(() => {
        // Fetch posts based on the selected subreddit
        fetchPosts(selectedSubreddit);
    }, [selectedSubreddit, fetchPosts]);
};