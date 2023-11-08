import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-grid-system';
import timeago from 'epoch-timeago';
import he from 'he';

import Votes from '../Votes/Votes';

import './Comment.scss';

export const Comment = ({ comment }) => {
    // setConfiguration({ gridColumns: 14, gutterWidth: 0 });

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
                            <Col xs={1} style={{ marginTop: '-15px' }}>
                                <Votes upvotes={c.upvotes} downvotes={c.downvotes} className="comment-votes" />
                            </Col>
                            <Col>
                                <div className="comment" dangerouslySetInnerHTML={{ __html: c.body_html }}></div>
                            </Col>
                        </Row>
                        <Row justify="between" className="comment-footer">
                            <Col xs={3}>
                                <a href={`https://www.reddit.com/user/${c.author}`} target="_blank" rel="noreferrer" className="comment-author__url">{c.author}</a>
                            </Col>
                            <Col xs={3}>
                                <div className="comment-daysAgo">{c.timeago}</d>
                            </Col>
                        </Row>
                    </Container>
                    <hr />
                </motion.div>
            </Col>
        </>
    );
};