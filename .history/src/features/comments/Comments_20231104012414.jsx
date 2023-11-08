import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col } from 'react-grid-system';

import { Comment } from '../../components/Comment';

import './Comments.scss';

const Comments = ({ comments, isLoading, error }) => {
    if(isLoading) {
        <div className="comments-container">
            <h6>Loading...</h6>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    }

    if(error) {
        <div className="comments-container">
            <p className="error">{error.message || error || "Oh no, an error occurred! Please refresh the page and try again." }</p>
        </div>
    }

    return (
        <div className="comments-container">
            <Container fluid>
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