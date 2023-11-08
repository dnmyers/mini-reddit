export default function Votes({
    handleUpvote,
    faArrowUp,
    handleDownvote,
    faArrowDown
}) {
    return {
        <div className="votes">
            <button type="button" className="votes__upvotes__button" onClick={handleUpvote}>
                <FontAwesomeIcon icon={faArrowUp} className="votes__icon__up" /> </button> <span className="votes__count">
                    {
            (p.upvotes > 1000 ? `$ {
                        (p.upvotes / 1000).toFixed(1)
                    }

                    k` : p.upvotes) || <Skeleton />
        }

        </span> <button type="button" className="votes__downvotes__button" onClick={
            handleDownvote
        }

        > <FontAwesomeIcon icon={
            faArrowDown
        }
            className="votes__icon__down" /> </button> </div>
    }
}