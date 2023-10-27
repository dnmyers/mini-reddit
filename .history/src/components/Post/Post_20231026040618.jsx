/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Container, Col, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

import './Post.scss';

const Post = ({ post, index }) => {
    const p = {
        title: post.data.title,
        author: post.data.author,
        content: post.data.selftext,
        subreddit: post.data.subreddit_name_prefixed,
        num_comments: post.data.num_comments,
        upvotes: post.data.ups,
        downvotes: post.data.downs,
        url: post.data.url,
        thumbnail: post.data.thumbnail,
    };

    if(p.thumbnail === 'self' || p.thumbnail === 'default' || p.thumbnail === 'image' || p.thumbnail === 'spoiler' || p.thumbnail === 'nsfw' || p.thumbnail === 'image' || p.thumbnail === 'link' || p.thumbnail === 'video' || p.thumbnail === 'hosted:video' || p.thumbnail === 'rich:video' || p.thumbnail === 'redditmedia' || p.thumbnail === 'gif' || p.thumbnail === 'album' || p.thumbnail.includes('external-preview')) {
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
                    <Col xs={1} style={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}>
                        <div className="post__votes">
                            <FontAwesomeIcon icon={faArrowUp} className="post__votes__icon__up" />
                            <span className="post__votes__count">{ (p.upvotes > 1000 ? `${(p.upvotes / 1000).toFixed(1)}k` : p.upvotes) || <Skeleton /> }</span>
                            <FontAwesomeIcon icon={faArrowDown} className="post__votes__icon__down" />
                        </div>
                    </Col>
                    <Col xs={11}>
                        <div className="post__main">
                            <h5 className="post__main__title">
                                <a href={p.url} target="_blank" rel="noreferrer" className="post__main__title__url">{p.title || <Skeleton />}</a>
                            </h5>
                            <h6 className="post__main__subreddit">
                                <a href={`https://www.reddit.com/${p.subreddit}`} target="_blank" rel="noreferrer" className="post__main__subreddit__url">{p.subreddit || <Skeleton />}</a>
                            </h6>
                            { p.thumbnail && <img src={p.thumbnail} alt="post thumbnail" className="post__main__thumbnail" /> }
                            <p className="post__main__body">{ p.content }</p>
                            <hr />
                            <div className="post__main__footer">
                                <h6 className="post__main__footer__author">{p.author}</h6>
                                <h6 className="post__main__footer__daysAgo">{}</h6>
                                <div className="post__main__footer__commments">
                                    <FontAwesomeIcon icon={faComment} className="post__main__footer__comments__icon" />
                                    <span>{p.num_comments || <Skeleton />}</span>
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