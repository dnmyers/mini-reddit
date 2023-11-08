import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";

export default function Votes({ handleUpvote, handleDownvote, upvotes }) {
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