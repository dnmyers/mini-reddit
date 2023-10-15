import Post from '../../components/Post';

import './Posts.scss';

const Posts = ({ posts }) => {
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