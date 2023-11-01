import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

import {
    selectComments,
    selectIsLoading,
    selectError,
    fetchComments
} from './commentsSlice';
import { Container } from 'react-grid-system';

const Comments = ({ postId }) => {
    const [listOfComments, setListOfComments] = useState([]);

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
            <p>{error.message || error || "Oh no, an error occurred! Please refresh the page and try again." }</p>
        </div>
    }

    return (
        <p>Comments</p>
    );
}

export default Comments;