import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPosts());
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
                posts.map((post, i) => (
                        <Post key={i} post={post} />
                ))
            }
        </div>
    );
}

export default Posts;