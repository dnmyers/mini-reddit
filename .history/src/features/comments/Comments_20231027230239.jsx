import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col } from 'react-grid-system';

import {
    selectComments,
    selectIsLoading,
    selectError,
    fetchComments
} from './commentsSlice';
import { Comment } from '../../components/Comment';

import './Comments.scss';

const Comments = ({ postId }) => {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        if(postId) {
            dispatch(fetchComments(postId));
        }
    }, [dispatch, postId]);

    if(isLoading) {
        <div className="comments-container">
            <Skeleton count={10} />
        </div>
    }

    if(error) {
        <div className="comments-container">
            <p className="error">{error.message || error || "Oh no, an error occurred! Please refresh the page and try again." }</p>
        </div>
    }

    return (
        <div className="comments-container">
            <Container>
                <Row justify='center'>
                    <Col>
                        <h3 className="comments-header">Comments</h3>
                    </Col>
                <hr />
                </Row>
                <Row>
                    <ul>
                        {
                            comments && comments.map((comment, index) => (
                                    <Comment key={index} comment={comment} />
                            ))
                        }
                    </ul>
                </Row>
            </Container>
        </div>
    );
}

export default Comments;