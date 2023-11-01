import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-grid-system';
import he from 'he';

import './Comment.scss';

export const Comment = ({ comment }) => {
    const c = {
        author: comment.author,
        created: comment.created,
        body_html: comment.body_html ? he.decode(comment.body_html) : '',
        upvotes: comment.ups,
        downvotes: comment.downs,
    };

    return (
        <Col>
            <li className="comment-list-item">
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
                    <div className="votes">
                        <FontAwesomeIcon icon={faArrowUp} />
                        <span>{c.upvotes}</span>
                        <FontAwesomeIcon icon={faArrowDown} />
                        {/* <span>{comment.downvotes}</span> */}
                    </div>
                    <div className="comment" dangerouslySetInnerHTML={{ __html: c.body_html }}></div>
                </motion.div>
            </li>
        </Col>
    );
};