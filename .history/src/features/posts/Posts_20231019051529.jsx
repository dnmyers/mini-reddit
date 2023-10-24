import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
    getPosts,
    selectPosts,
    selectIsLoading,
    selectError
} from './postsSlice';
import Post from '../../components/Post';

import './Posts.scss';

const Posts = ({ posts }) => {
    useEffect(() => {
        getPosts();
    }, []);



    return (
       <div className="posts-container">
            {
                posts.map(post => (
                        <Post key={post.id} post={post} />
                ))
            }
        </div>
    );
}

export default Posts;