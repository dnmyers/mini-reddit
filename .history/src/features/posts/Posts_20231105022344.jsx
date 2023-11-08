import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropagateLoader from 'react-spinners/PropagateLoader';

import {
    fetchPosts,
    selectPosts,
    selectIsLoading,
    selectError,
    selectSelectedSubreddit,
} from './postsSlice';
import Post from '../../components/Post';

import './Posts.scss';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit, dispatch]);

    if(loading) {
        return (
            <div className="posts-container">
                <div className="loading">
                    <PropagateLoader />
                    <div className="loading-text">
                        Loading...
                    </div>
                </div>
            </div>
        );
    }

    if(error) {
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
                posts && posts.map((post, i) => (
                    <Post key={i} post={post} index={i} />
                ))
            }
        </div>
    );
}

export default Posts;