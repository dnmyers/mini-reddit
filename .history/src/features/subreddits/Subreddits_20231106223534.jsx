import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import Skeleton from 'react-loading-skeleton';

import {
    fetchSubreddits,
    selectSubreddits,
    selectIsLoading,
    selectError
} from './subredditsSlice';
import { setSelectedSubreddit } from '../posts/postsSlice';

import 'react-loading-skeleton/dist/skeleton.css';
import './Subreddits.scss';

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, []);

    const handleOnClick = (sub) => {
        dispatch(setSelectedSubreddit(sub));
    };

    if (loading) {
        return (
            <div className="subreddits-container">
                <h3>Subreddits</h3>
                <hr />
                <div className="subreddits-skeletons">
                    <p>Loading...</p>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                    <div className="skeleton"><Skeleton /></div>
                </div>
            </div>
        );
    }

    if (error) {
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
            <motion.button
                type="button"
                initial={{
                    scale: 0,
                    y: 50,
                    opacity: 0,
                }}
                animate={{
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.3,
                        ease: 'easeInOut',
                    }
                }}
                whileHover={{
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.9
                }}
                onClick={() => handleOnClick(subreddit.display_name)}
                key={index}
            >
                <div className="subreddit">
                    <div className="subreddit__icon">
                        {subreddit.icon_img ? <img src={subreddit.icon_img} alt="subreddit icon" /> : <FontAwesomeIcon icon={faReddit} size="5x" style={{ color: "red" }} />}
                    </div>
                    <div className="subreddit__info">
                        <span className="subreddit__name">
                            r/{subreddit.display_name}
                        </span>
                    </div>
                </div>
            </motion.button>
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
                                            {renderSubreddits(subreddit, index)}
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
                                        {renderSubreddits(subreddit, index)}
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