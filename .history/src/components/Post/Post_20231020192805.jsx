/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { mockPost } from './mockPost';

import './Post.scss';

const Post = ({ post }) => {
    const p = {
        title: post.data.title,
        author: post.data.author,
        content: post.data.selftext,
        subreddit: post.data.subreddit_name_prefixed,
        num_comments: post.data.num_comments,
        upvotes: post.data.ups,
        downvotes: post.data.downs,
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
                scale: 0
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut'
                }
            }}
            exit={{
                opacity: 0,
                y: 50,
                scale: 0,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut'
                }
            }}
            className="post"
        >
            <div className="post__votes">
                <FontAwesomeIcon icon={faArrowUp} className="post__votes__icon__up" />
                <span className="post__votes__count">{p.upvotes}</span>
                <FontAwesomeIcon icon={faArrowDown} className="post__votes__icon__down" />
                {/* <span>{p.downvotes}</span> */}
            </div>
            <div className="post__main">
                <h3 className="post__main__title">{p.title}</h3>
                <h4 className="post__main__subreddit">{p.subreddit}</h4>
                <p className="post__main__body">{p.content}</p>
                <hr />
                <div className="post__main__footer">
                    <h4 className="post__main__footer__author">{p.author}</h4>
                    <div className="post__main__footer__commments">
                        <FontAwesomeIcon icon={faComment} />
                        <span>{p.num_comments}</span>
                    </div>
                </div>

            </div>

            {/* Below from CoPilot */}
            {/* <div className="post">
                <div className="post__votes">
                    <FontAwesomeIcon icon={faArrowUp} />
                    <span>{post.votes}</span>
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
                <div className="post__content">
                    <div className="post__title">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="post__info">
                        <span className="post__info__author">Posted by <span>{post.author}</span></span>
                        <span className="post__info__date">{post.date}</span>
                        <span className="post__info__comments"><FontAwesomeIcon icon={faComment} /> {post.comments} comments</span>
                    </div>
                </div>
            </div> */}
        </motion.div>
    );
}

export default Post;