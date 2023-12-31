import './PostsList.scss';

const PostsList = ({ posts }) => {
    return (
        <div>
            {
                posts.map(post => (
                    <Post key={post.id} post={post} />
                ))
            }
        </div>
    );
}

export default PostsList;