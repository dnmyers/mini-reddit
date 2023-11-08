import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropagateLoader from 'react-spinners/PropagateLoader';

import {
    fetchPosts,
    selectPosts,
    selectIsLoading,
    selectError,
    selectSelectedSubreddit,
    selectNoMatchingPosts,
} from './postsSlice';
import Post from '../../components/Post';

import './Posts.scss';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const noMatchingPosts = useSelector(selectNoMatchingPosts);

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit, dispatch]);

    if (loading) {
        return (
            <div className="posts-container">
                <div className="loading">
                    <div className="loading-text">
                        Loading
                    </div>
                    <div className="loading-spinner">
                        <PropagateLoader />
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="posts-container">
                <div className="error">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="posts-container">
            {
                noMatchingPosts && (
                    <div className="no-matching-posts">
                        <h3>No posts match your search</h3>
                    </div>
                )
            }
            {
                posts && posts.map((post, i) => (
                    <Post key={i} post={post} index={i} />
                ))
            }
        </div>
    );
}

export default Posts;