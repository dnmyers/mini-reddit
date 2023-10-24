import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchSubreddits,
    selectSubreddits,
    selectIsLoading,
    selectError
} from './subredditsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Visible } from 'react-grid-system';

import './Subreddits.scss';

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, []);

    if(loading) {
        return (
            <div className="subreddits-container">
                <h3>Subreddits</h3>
                <hr />
                <div className="subreddits">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    if(error) {
        return (
            <div className="subreddits-container">
                <h3>Subreddits</h3>
                <hr />
                <div className="subreddits">
                    <p>Error: {error}</p>
                </div>
            </div>
        );
    }

    const renderSubreddits = (subreddit, index) => {
        return (
            <div className="subreddit" key={index}>
                <div className="subreddit__icon">
                    { subreddit.data.icon_img ? <img src={subreddit.data.icon_img} alt="subreddit icon" /> : <FontAwesomeIcon icon={faReddit} size="5x" style={{ color: "red" }} /> }
                </div>
                <div className="subreddit__info">
                    <h5 className="subreddit__name">r/{subreddit.data.display_name}</h5>
                </div>
            </div>
        );
    };

    return (
        div.subreddits-container
    )
}

export default Subreddits;