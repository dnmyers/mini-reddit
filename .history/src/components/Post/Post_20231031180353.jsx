                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               // import { useEf fect, useMemo } from 'react';
import { motion  } from 'framer-motion';
import { Cont ainer, Col, Row } from 'react-grid-system';
import { F  ontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faComment, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import  Skeleton from 'react-loading-skeleton';
impo rt timeago from 'epoch-timeago';
im port { useDispatch } from 'react-redux';

import Com ments from '../../features/comments/';
import {
    fetchCommen ts,
    postComme nts,
    postCom mentsLoading,
    post  CommentsError,
    po stShowingComments,
     toggleShowingComments
}  from '../../features/posts/postsSlice';

im port 'react-loading-skeleton/dist/skeleton.css';

im port './Post.scss';

const  Post = ({ post, index }) => {
      const dispatch = useDispatch();

    const p = {
        index: index,
        name: post.nam e,
        id: post.id,
        title: post.title,
        author: post.author,
        content: post.selft ext,
        subreddit: post.s ubreddit_name_prefixed,
        num_comments: p ost.num_comments,
        upvotes: pos  t.ups,
        downvotes:  post.downs,
        url: pos t.url,
        thumbn ail: post.thumbnail,
        crea ted: timeago(post.created * 1000),
        co mments: postComments,
         commentsLoading: postCommentsLoading,
         commentsError: postCommentsError,
         showingComments: postShowingComments
     };

    co  nst handleCommentsClick = () => {
         dispatch(fetchComments({ id: p.id, index: p.index }));
     };

    if (p.thumbnail === 'self' || p.thumbnail === 'default' || p.thumbnail === 'image' || p.thumbnail === 'spoiler' || p.thumbnail === 'nsfw' || p.thumbnail === 'image' || p.thumbnail === 'link' || p.thumbnail === 'video' || p.thumbnail === 'hosted:video' || p.thumbnail === 'rich:video' || p.thumbnail === 'redditmedia' || p.thumbnail === 'gif' || p.thumbnail === 'album' || p.thumbnail.includes('external-preview')) {
         p.thumbnail = false;
     }

    return (
        <motion.div
            initial={{
                opaci ty: 0,
                y:  50,
                  scale: 0
            }}
            animate={{
                opacity : 1,
                y: 0,
                scale: 1,
                transition:  {
                    durat ion: 0.3,
                    eas e: 'easeInOut',
                    t ype: 'spring',
                     delay: 0.1 * index,
                  }
            }}
            exit={{
                transi tion: {
                     duration: 0.3,
                     ease: 'easeInOut'
                 }
            }}
             className="post"
        >
            <Container fluid>
                <Row nogutter>
                    <Col xs={1} style= {{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}>
                        <div className="votes">
                            <FontAw esomeIcon icon={faArrowUp} className="votes__icon__up" />
                            <span  className="votes__count">{ (p.upvotes > 1000 ? `${(p.upvotes / 1000).toFixed(1)}k` : p.upvotes) || <Skeleton /> }</span>
                            <Fo ntAwesomeIcon icon={faArrowDown} className="votes__icon__down" />
                        </di  v>
                    </Col>
                    <Col xs={11}>
                        <div className="post_ _main">
                            <a href={p.url}  target="_blank" rel="noreferrer" className="post__url">
                                <h5 class Name="title">
                                    {p. title || <Skeleton />}
                                </h5>
                                <h6 class Name="subreddit">
                                    <a  href={`https://www.reddit.com/${p.subreddit}`} target="_blank" rel="noreferrer" className="subreddit__url">{p.subreddit || <Skeleton />}</a>
                                </h6>
                                { p.t humbnail && <img src={p.thumbnail} alt="post thumbnail" className="thumbnail" /> }
                                <p   className="content">{ p.content }</p>
                            </a>
                            <hr />
                            <div className= "footer">
                                <h6 class Name="author">
                                    <a  href={`https://www.reddit.com/user/${p.author}`} target="_blank" rel="noreferrer" className="author__url">{p.author}</a>
                                </h6>
                                <h6 className="daysAgo ">{p.created}</h6>
                                <div className="comm ments">
                                    <motion.butto  n
                                        type="b utton"
                                        while Hover={{ scale: 1.1 }}
                                        whi leTap={{ scale: 0.9 }}
                                        o nClick={handleCommentsClick}
                                         className="comments__button"
                                    >
                                         <FontAwesomeIcon icon={faComment} className="comments__icon" />
                                         <span>{p.num_comments || <Skeleton />}</span>
                                     </motion.button>
                                 </div>
                             </div>
                        </ div>
                    </Co l>
                </Row>
                <Row>
                    <Col>
                        <div class Name="comments-container">
                            { p. showingCom1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ments === true && <Comments comments={p.comments} isLoading={p.commentsLoading} error={p.commentsError} /> }
                        </div>
                    </Col>
                </Row>1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111                                                                                                                                              1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                                                                           1 2 . 57