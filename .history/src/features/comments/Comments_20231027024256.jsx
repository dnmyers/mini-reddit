import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { Container, Row } from 'react-grid-system';

import {
    selectComments,
    selectIsLoading,
    selectError,
    fetchComments
} from './commentsSlice';
import { Comment } from '../../components/Comment/Comment';

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
                <Row>
                    <h3>Comments</h3>
                </Row>
                <hr />
                    {
                        comments && comments.map((comment, index) => (
                            <Row key={index}>
                                <Comment key={index} comment={comment} />
                            </Row>
                        ))
                    }
            </Container>
        </div>
    );
}

export default Comments;