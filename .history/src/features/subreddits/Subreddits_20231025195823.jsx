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
import { Container, Row, Col, Hidden } from 'react-grid-system';

import './Subreddits.scss';

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const [selectedSubreddit, setSelectedSubreddit] = useState('/home');


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
                    <span className="subreddit__name">r/{subreddit.data.display_name}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="subreddits-container">
            <h3>Subreddits</h3>
            <hr />
            <Hidden md lg xl xxl xxxl>
                <div className="subreddits-row">
                    <Container>
                        <Row wrap='nowrap'>
                            {
                                subreddits.map((subreddit, index) => {
                                    return (
                                        <Col key={index}>
                                            { renderSubreddits(subreddit, index) }
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Container>
                </div>
            </Hidden>
            <Hidden xs sm>
                <div className="subreddits-column">
                    <Container>
                            {
                                subreddits.map((subreddit, index) => {
                                    return (
                                        <div className="subreddit" key={index}>
                                            { renderSubreddits(subreddit, index) }
                                        </div>
                                    );
                                })
                            }
                    </Container>
                </div>
            </Hidden>
        </div>
    )
}

export default Subreddits;