import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    selectComments,
    selectIsLoading,
    selectError,
    fetchComments
} from './commentsSlice';

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

    return (
        <p>Comments</p>
    );
}

export default Comments;