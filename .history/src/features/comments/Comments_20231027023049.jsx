import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectComments } from './commentsSlice';

const Comments = ({ postId }) => {
    const [listOfComments, setListOfComments] = useState([]);


    return (
        <p>Comments</p>
    );
}

export default Comments;