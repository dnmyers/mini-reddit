/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Container, Col, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

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
        url: post.data.url,
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
            <Container fluid>
                <Row nogutter>
                    <Col sm={1}>
                        <div className="post__votes">
                            <FontAwesomeIcon icon={faArrowUp} className="post__votes__icon__up" />
                            <span className="post__votes__count">{p.upvotes}</span>
                            <FontAwesomeIcon icon={faArrowDown} className="post__votes__icon__down" />
                        </div>
                    </Col>
                    <Col sm={11}>
                        <div className="post__main">
                            <h5 className="post__main__title">
                                <a href={p.url} target="_blank" rel="noreferrer" className="post__main__title__url">{p.title}</a>
                            </h5>
                            <h6 className="post__main__subreddit">
                                <a href={`https://www.reddit.com/${p.subreddit}`} target="_blank" rel="noreferrer" className="post__main__subreddit__url">{p.subreddit}</a>
                            </h6>
                            <p className="post__main__body">{p.content}</p>
                            <hr />
                            <div className="post__main__footer">
                                <h4 className="post__main__footer__author">{p.author}</h4>
                                <div className="post__main__footer__commments">
                                    <FontAwesomeIcon icon={faComment} className="post__main__footer__comments__icon" />
                                    <span>{p.num_comments}</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

export default Post;