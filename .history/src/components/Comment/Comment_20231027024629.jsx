import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-grid-system';

const Comment = ({ comment }) => {
    const c = {
        author: comment.data.author,
    }

    return (
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
            >
                <p>{comment.content}</p>
                <div>
                    <FontAwesomeIcon icon={faArrowUp} />
                    <span>{comment.upvotes}</span>
                    <FontAwesomeIcon icon={faArrowDown} />
                    <span>{comment.downvotes}</span>
                </div>
            </motion.div>
        </Col>
    );
}

export default Comment;