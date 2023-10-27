import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropagateLoader from 'react-spinners/PropagateLoader';

import {
    fetchPosts,
    selectPosts,
    selectIsLoading,
    selectError
} from './postsSlice';
import Post from '../../components/Post';

import './Posts.scss';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    if(loading) {
        return (
            <div className="posts-container">
                <div className="loading">
                    <PropagateLoader loading={loading} color="FF4500" size={15} />
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
                    <Post key={i} post={post} index={i} />
                ))
            }
        </div>
    );
}

export default Posts;