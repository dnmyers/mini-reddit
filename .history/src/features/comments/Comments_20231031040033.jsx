import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col } from 'react-grid-system';

import { Comment } from '../../components/Comment';

import './Comments.scss';

const Comments = ({ comments, isLoading, error }) => {
    useEffect(() => {
        console.log('Comments.jsx: useEffect: comments: ', comments);
        console.log('Comments.jsx: useEffect: isLoading: ', isLoading);
        console.log('Comments.jsx: useEffect: error: ', error);

    }, [comments, isLoading, error]);

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