import React from 'react';
import { POSTS } from './resources/posts';
import { COMMENT } from './resources/comments';
import { Link } from 'react-router-dom';
import './Posts.css';
import { COMMENT_OB } from './App';

const Post = (props: {
    post: POSTS,
    setCommentOb: React.Dispatch<React.SetStateAction<COMMENT_OB | undefined>>,
    Comments: COMMENT
}) => {
    let CommentsLength = props.Comments[props.post.code];

    return (
        <React.Fragment>
            <div className='posts-card'>
                <Link to={`/comments/${props.post.code}`} onClick={() => { props.setCommentOb({ url: props.post.display_src, commentCode: props.post.code, commentNumbers: (CommentsLength !== undefined ? CommentsLength.length : 0), likesNumbers: props.post.likes }) }}>
                    <div className='card-upper-content'>
                        <img className='card-image' src={props.post.display_src} alt={props.post.id} />
                    </div>
                </Link>
                <div className='card-lower-content'>
                    <p className='card-caption'>{props.post.caption}</p>
                    <div>💙{props.post.likes}</div>
                    <div>💬{CommentsLength !== undefined ? CommentsLength.length : 0}</div>
                </div>
            </div>
        </React.Fragment>
    );
}

const PostsContainer = (props: {
    postsList: POSTS[],
    setCommentOb: React.Dispatch<React.SetStateAction<COMMENT_OB | undefined>>,
    Comments: COMMENT
}) => {
    return (
        <React.Fragment>
            <div className='posts-container'>
                {
                    props.postsList.map((post: POSTS, i: number) => <Post Comments={props.Comments} key={i} setCommentOb={props.setCommentOb} post={post} />)
                }
            </div>
        </React.Fragment>
    );
}

const PostsPage = (props: {
    setCommentOb: React.Dispatch<React.SetStateAction<COMMENT_OB | undefined>>,
    Comments: COMMENT,
    posts: POSTS[]
}) => {
    document.title = 'Posts - Instagram Clone';
    return (
        <React.Fragment>
            <PostsContainer
                postsList={props.posts}
                setCommentOb={props.setCommentOb}
                Comments={props.Comments}
            />
        </React.Fragment>
    );
}

export default PostsPage;