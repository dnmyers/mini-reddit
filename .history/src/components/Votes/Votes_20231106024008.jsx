import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";

import './Votes.scss';

export default function Votes({ upvotes, downvotes }) {
    const [voted, setVoted] = useState(false);
    const [upOrDown, setUpOrDown] = useState('none');

    const handleUpvote = () => {
        if(!voted && upOrDown === 'none') {
            setVoted(true);
            setUpOrDown('up');
            upvotes++;
        } else if(voted && upOrDown === 'down') {
            setUpOrDown('up');
            upvotes += 1;
            downvotes -= 1;
        } else {
            return;
        }
    };

    const handleDownvote = () => {
        if(!voted && upOrDown === 'none') {
            setVoted(true);
            setUpOrDown('down');
            downvotes++;
        } else if(voted && upOrDown === 'up') {
            setUpOrDown('down');
            downvotes += 1;
            upvotes -= 1;
        } else {
            return;
        }
    }

    useEffect(() => {
        console.group('Votes - useEffect - upvotes, downvotes');
        console.log('upvotes: ' + upvotes);
        console.log('downvotes: ', downvotes);
        console.log('voted: ', voted);
        console.log('upOrDown: ', upOrDown);
        console.groupEnd();
    }, [upvotes, downvotes]);

    return (
        <div className="votes">
            <button type="button" className="votes__upvotes__button" onClick={handleUpvote}>
                <FontAwesomeIcon icon={faArrowUp} className="votes__icon__up" />
            </button>
            <span className={ "votes__count " + upvotes >= downvotes ? "positive" : "negative" }>
                {
                    upvotes >= downvotes ?
                    (upvotes > 1000 ? `${(upvotes / 1000).toFixed(1)}k` : upvotes) :
                    (downvotes > 1000 ? `${(downvotes / 1000).toFixed(1)}k` : downvotes)
                }
            </span>
            <button type="button" className="votes__downvotes__button" onClick={handleDownvote}>
                <FontAwesomeIcon icon={faArrowDown} className="votes__icon__down" />
            </button>
        </div>
    );
}