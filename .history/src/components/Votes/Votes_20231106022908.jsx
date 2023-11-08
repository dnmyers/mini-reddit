import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";

export default function Votes({ handleUpvote, handleDownvote, upvotes, downvotes }) {
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

    const handleDownVote = () => {
        if(voted) {
            return;
        } else {
            setVoted(true);
            upvotes--;
        }
    }

    return (
        <div className="votes">
            <button type="button" className="votes__upvotes__button" onClick={handleUpvote}>
                <FontAwesomeIcon icon={faArrowUp} className="votes__icon__up" />
            </button>
            <span className="votes__count">
                {
                    (upvotes > 1000 ? `${(upvotes / 1000).toFixed(1)}k` : upvotes) || <Skeleton />
                }
            </span>
            <button type="button" className="votes__downvotes__button" onClick={handleDownvote}>
                <FontAwesomeIcon icon={faArrowDown} className="votes__icon__down" />
            </button>
        </div>
    );
}