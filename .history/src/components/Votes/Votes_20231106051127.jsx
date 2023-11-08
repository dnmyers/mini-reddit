import { useState, useEffect } from 'react';
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiArrowUpThick,
    TiArrowDownThick,
} from 'react-icons/ti';
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
        } else if (voted && upOrDown === 'up') {
            setUpOrDown('none');
            setVoted(false);
            upvotes -= 1;
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
        } else if (voted && upOrDown === 'down') {
            setUpOrDown('none');
            setVoted(false);
            downvotes -= 1;
        } else {
            return;
        }
    }

    return (
        <div className="votes">
            <button type="button" className="votes__upvotes__button" onClick={handleUpvote}>
                {
                    upOrDown === 'up' ?
                    <TiArrowUpThick className="votes__icon__up positive" /> :
                    <TiArrowUpOutline className="votes__icon__up" />
                }
            </button>
            <span className={ "votes__count " + (upvotes >= downvotes ? "positive" : "negative") }>
                {
                    upvotes >= downvotes ?
                    (upvotes > 1000 ? `${(upvotes / 1000).toFixed(1)}k` : upvotes) :
                    (downvotes > 1000 ? `${(downvotes / 1000).toFixed(1)}k` : downvotes)
                }
            </span>
            <button type="button" className="votes__downvotes__button" onClick={handleDownvote}>
                {
                    upOrDown === 'down' ?
                    <TiArrowDownThick className="votes__icon__down negative" /> :
                    <TiArrowDownOutline className="votes__icon__down" />
                }
            </button>
        </div>
    );
}