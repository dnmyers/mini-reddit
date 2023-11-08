import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import timeago from 'epoch-timeago';
import he from 'he';

import './Comment.scss';

export const Comment = ({ comment }) => {
    setConfiguration({ gridColumns: 14, gutterWidth: 0 });

    const c = {
        author: comment.author,
        created: comment.created,
        body_html: comment.body_html ? he.decode(comment.body_html) : '',
        upvotes: comment.ups,
        downvotes: comment.downs,
        timeago: timeago(comment.created * 1000),
    };

    return (
        <>
            <Col>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
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
                    className="comment-container"
                >
                    <Container fluid>
                        <Row>
                            <Col debug xs={2}>
                                <div className="comment-votes">
                                    <motion.div className="comment-votes__icon__up" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <FontAwesomeIcon icon={faArrowUp} />
                                    </motion.div>
                                <span className="comment-votes__count">{(c.upvotes > 1000 ? `${(c.upvotes / 1000).toFixed(1)}k` : c.upvotes)}</span>
                                    <motion.div className="comment-votes__icon__down" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <FontAwesomeIcon icon={faArrowDown} />
                                    </motion.div>
                                </div>
                            </Col>
                            <Col>
                                <div className="comment" dangerouslySetInnerHTML={{ __html: c.body_html }}></div>
                            </Col>
                        </Row>
                        <Row justify="between">
                            <Col xs={3}>
                                <a href={`https://www.reddit.com/user/${c.author}`} target="_blank" rel="noreferrer" className="comment-author__url">{c.author}</a>
                            </Col>
                            <Col xs={3}>
                                <h6 className="comment-daysAgo">{c.timeago}</h6>
                            </Col>
                        </Row>
                    </Container>
                    <hr />
                </motion.div>
            </Col>
        </>
    );
};