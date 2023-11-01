import axios from 'axios';

export const API_ROOT = 'https://www.reddit.com/';

export const getSubredditPosts = async (subreddit) => {
    const response = await axios.get(`${API_ROOT}r/${subreddit}.json`);

    const posts = response.data.data.children.map(post => post.data);
    return posts;
};

export const getSubreddits = async () => {
    const response = await axios.get(`${API_ROOT}subreddits.json`);

    const subreddits = response.data.data.children(subreddit => subreddit.data);
    return subreddits;
};

export const getPostComments = async (postId) => {
    const response = await axios.get(`${API_ROOT}comments/${postId}.json?limit=10`);

    const comments = response.data[1].children.filter(comment => comment.kind !== 'more').map(post => post.data);
    return comments;
};