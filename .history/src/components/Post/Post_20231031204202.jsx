import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Col, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import timeago from 'epoch-timeago';
import { useDispatch, useSelector } from 'react-redux';

import Comments from '../../features/comments/';
import {
    fetchComments,
    postComments,
    postCommentsLoading,
    postCommentsError,
    postCommentsShowing,
    toggleCommentsShowing,
    selectPostCommentsShowing,
    selectPostCommentsLoading,
    selectPostCommentsError,
    selectPostComments,
} from '../../features/posts/postsSlice';

import 'react-loading-skeleton/dist/skeleton.css';

import './Post.scss';

const Post = ({ post, index }) => {
    const dispatch = useDispatch();

    const comments = useSelector(selectPostComments(post.id));
    const commentsLoading = useSelector(selectPostCommentsLoading(post.id));
    const commentsError = useSelector(selectPostCommentsError(post.id));
    const commentsShowing = useSelector(selectPostCommentsShowing(post.id));

    const p = {
        index: index,
        name: post.name,
        id: post.id,
        title: post.title,
        author: post.author,
        content: post.selftext,
        subreddit: post.subreddit_name_prefixed,
        num_comments: post.num_comments,
        upvotes: post.ups,
        downvotes: post.downs,
        url: post.url,
        thumbnail: post.thumbnail,
        created: timeago(post.created * 1000),
        comments: comments,
        commentsLoading: commentsLoading,
        commentsError: commentsError,
        commentsShowing: commentsShowing,
    };

    useEffect(() => {
        console.log('Post.jsx: useEffect: post: ', post);
        console.log('Post.jsx: useEffect: index: ', index);
        console.log('Post.jsx: useEffect: postComments: ', postComments);
        console.log('Post.jsx: useEffect: postCommentsLoading: ', postCommentsLoading);
        console.log('Post.jsx: useEffect: postCommentsError: ', postCommentsError);
        console.log('Post.jsx: useEffect: postCommentsShowing: ', postCommentsShowing);
        console.log('Post.jsx: useEffect: p.commentsShowing: ', p.commentsShowing);
    }, [post, index, p.commentsShowing]);

    const handleCommentsClick = () => {
        dispatch(fetchComments({ id: p.id, index: p.index }));
    };

    if (p.thumbnail === 'self' || p.thumbnail === 'default' || p.thumbnail === 'image' || p.thumbnail === 'spoiler' || p.thumbnail === 'nsfw' || p.thumbnail === 'image' || p.thumbnail === 'link' || p.thumbnail === 'video' || p.thumbnail === 'hosted:video' || p.thumbnail === 'rich:video' || p.thumbnail === 'redditmedia' || p.thumbnail === 'gif' || p.thumbnail === 'album' || p.thumbnail.includes('external-preview')) {
        p.thumbnail = false;
    }

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
                    ease: 'easeInOut',
                    type: 'spring',
                    delay: 0.1 * index,
                }
            }}
            exit={{
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut'
                }
            }}
            className="post"
        >
            <Container fluid>
                <Row nogutter>
                    <Col xs={1} style= {{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}>
                        <div className="votes">
                            <FontAwesomeIcon icon={faArrowUp} className="votes__icon__up" />
                            <span className="votes__count">{ (p.upvotes > 1000 ? `${(p.upvotes / 1000).toFixed(1)}k` : p.upvotes) || <Skeleton /> }</span>
                            <FontAwesomeIcon icon={faArrowDown} className="votes__icon__down" />
                        </div>
                    </Col>
                    <Col xs={11}>
                        <div className="post__main">
                            <a href={p.url} target="_blank" rel="noreferrer" className="post__url">
                                <h5 className="title">
                                    { p. title || <Skeleton /> }
                                </h5>
                                <h6 className="subreddit">
                                    <a href={`https://www.reddit.com/${p.subreddit}`} target="_blank" rel="noreferrer" className="subreddit__url">{p.subreddit || <Skeleton />}</a>
                                </h6>
                                { p.thumbnail && <img src={p.thumbnail} alt="post thumbnail" className="thumbnail" /> }
                                <p className="content">{ p.content }</p>
                            </a>
                            <hr />
                            <div className="footer">
                                <h6 className="author">
                                    <a href={`https://www.reddit.com/user/${p.author}`} target="_blank" rel="noreferrer" className="author__url">{p.author}</a>
                                </h6>
                                <h6 className="daysAgo">{p.created}</h6>
                                <div className="commments">
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handleCommentsClick}
                                        className="comments__button"
                                    >
                                        <FontAwesomeIcon icon={faComment} className="comments__icon" />
                                        <span>{ p.num_comments || <Skeleton /> }</span>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {
                    p.commentsShowing === true ? (
                        <Row>
                            <Col>
                                <div className="comments-container">
                                    <Comments comments={p.comments} isLoading={p.commentsLoading} error={p.commentsError} />
                                </div>
                            </Col>
                        </Row>
                    ) : null
                }
            </Container>
        </motion.div>
    );
}

export default Post;