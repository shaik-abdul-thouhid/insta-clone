import React, { useState } from 'react';
import './Comments.css';
import NotFoundPage from './NotFoundPage';
import { COMMENT } from './resources/comments';
import { POSTS } from './resources/posts';

const CommentsPage = (props: {
    postOb: POSTS,
    Comments: COMMENT,
}) => {
    const [likes, incrementLikes] = useState<number>(props.postOb.likes);

    if (props.postOb !== undefined)
        return (
            <React.Fragment>
                <div className='comment-container'>


                    <div className='comment-container-left-section'>
                        <img id='comment-image' src={props.postOb.display_src} alt={props.postOb.code} />
                        <h4 className='card-caption positioning'>{props.postOb.caption}</h4>

                        <div className='button-flex comment-btn-container'>
                            <button className='btn comment-btn' onClick={() => incrementLikes(++props.postOb.likes)}>💙 {likes}</button>
                            <button className='btn comment-btn'>💬 {props.Comments[props.postOb.code].length}</button>
                        </div>

                    </div>

                    <div className='comment-container-right-section'>
                        {
                            props.Comments[props.postOb.code].map((com, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <div className='comment'>
                                            <h5 className='comment-id'>{com.user}</h5>
                                            <p className='comment-text'>{com.text}</p>
                                        </div>
                                    </React.Fragment>
                                );
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    else
        return <NotFoundPage />


}

export default CommentsPage;