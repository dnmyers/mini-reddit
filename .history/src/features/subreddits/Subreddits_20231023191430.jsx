import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchSubreddits,
    selectSubreddits,
    selectIsLoading,
    selectError
} from './subredditsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

import './Subreddits.scss';

const Subreddits = () => {
    const dispatch = useDispatch();

    const subreddits = useSelector(selectSubreddits);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchSubreddits());
        console.log("Subreddits.jsx - useEffect() - subreddits: " + subreddits);
    }, []);

    if(isLoading) {
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

    return (
        <div className="subreddits-container">
            <h3>Subreddits</h3>
            <hr />
            <div className="subreddits">

                {
                    subreddits.map((subreddit, index) => {
                        return (
                            <div className="subreddit" key={index}>
                                <div className="subreddit__icon">
                                    { subreddit.data.icon_img ? <img src={subreddit.data.icon_img} alt="subreddit icon" /> : <FontAwesomeIcon icon={faReddit} /> }
                                </div>
                                <div className="subreddit__info">
                                    <h5 className="subreddit__name">r/{subreddit.data.display_name}</h5>
                                    {/* <p className="subreddit__description">{subreddit.data.public_description}</p> */}
                                </div>
                            </div>
                        );
                    })
                }
                {/* <div className="subreddit">
                    <h5 className="subreddit__name">r/Popular</h5>
                    <p className="subreddit__description">Ask Reddit...</p>
                </div>
                <div className="subreddit">
                    <h5 className="subreddit__name">r/AskReddit</h5>
                    <p className="subreddit__description">Ask Reddit...</p>
                </div>
                <div className="subreddit">
                    <h5 className="subreddit__name">r/AskReddit</h5>
                    <p className="subreddit__description">Ask Reddit...</p>
                </div>
                <div className="subreddit">
                    <h5 className="subreddit__name">r/AskReddit</h5>
                    <p className="subreddit__description">Ask Reddit...</p>
                </div>
                <div className="subreddit">
                    <h5 className="subreddit__name">r/AskReddit</h5>
                    <p className="subreddit__description">Ask Reddit...</p>
                </div>
                <div className="subreddit">
                    <h5 className="subreddit__name">r/AskReddit</h5>
                    <p className="subreddit__description">Ask Reddit...</p>
                </div>
                <div className="subreddit">
                    <h5 className="subreddit__name">r/AskReddit</h5>
                    <p className="subreddit__description">Ask Reddit...</p>
                </div>
                <div className="subreddit">
                    <h5 className="subreddit__name">r/AskReddit</h5>
                    <p className="subreddit__description">Ask Reddit...</p>
                </div> */}
            </div>
        </div>
    );
}

export default Subreddits;