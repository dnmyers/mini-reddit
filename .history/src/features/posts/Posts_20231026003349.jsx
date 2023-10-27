import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    fetchPosts,
    selectPosts,
    selectIsLoading,
    selectError
} from './postsSlice';
import Post from '../../components/Post';
import { useSelectedSubreddit } from '../../hooks/useSelectedSubreddit';

import './Posts.scss';

const Posts = () => {
    const dispatch = useDispatch();
    const selectedSubreddit = useSelectedSubreddit();
    const posts = useSelector(selectPosts);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        if(selectedSubreddit) {
            dispatch(fetchPosts(selectedSubreddit));
        }
    }, []);

    if(loading) {
        return (
            <div className="posts-container">
                <div className="loading">
                    Loading...
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
                    <Post key={i} post={post} />
                ))
            }
        </div>
    );
}

export default Posts;