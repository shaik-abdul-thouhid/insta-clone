import React from 'react';
import './Comments.css';
import NotFoundPage from './NotFoundPage';
import { COMMENT } from './resources/comments';
import { COMMENT_OB } from './App';

const CommentsPage = (props: {
    commentOb: COMMENT_OB,
    Comments: COMMENT
}) => {

    if (props.commentOb === undefined) {
        return <NotFoundPage />;
    }
    else {

        return (
            <React.Fragment>
                <div className='comment-container'>
                    <img src={props.commentOb.url} alt={props.commentOb.commentCode} />
                    {
                        props.Comments[props.commentOb.commentCode].map((com, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <h3>{com.user}</h3>
                                    <p>{com.text}</p>
                                </React.Fragment>
                            );
                        })
                    }
                    <div>💙{props.commentOb.likesNumbers}</div>
                    <div>💬{props.commentOb.commentNumbers}</div>
                </div>
            </React.Fragment>
        );
    }

}

export default CommentsPage;