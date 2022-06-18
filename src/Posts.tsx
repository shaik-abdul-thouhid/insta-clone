import React, { useState } from 'react';
import { POSTS } from './resources/posts';
import { COMMENT } from './resources/comments';
import { Link } from 'react-router-dom';
import './Posts.css';

const Post = (props: {
    post: POSTS,
    setpostOb: React.Dispatch<React.SetStateAction<POSTS | undefined>>,
    Comments: COMMENT
}) => {
    const [likes, incrementLikes] = useState<number>(props.post.likes);
    let CommentsLength = props.Comments[props.post.code];

    return (
        <React.Fragment>
            <div className='posts-card'>

                <div className='card-upper-content'>
                    <Link to={`/comments/${props.post.code}`} onClick={() => { props.setpostOb(props.post) }}>
                        <img className='card-image' src={props.post.display_src} alt={props.post.id} />
                    </Link>
                </div>

                <div className='card-lower-content'>
                    <p className='card-caption'>{props.post.caption}</p>
                    <div className='button-flex'>
                        <button className='btn' onClick={() => {
                            incrementLikes(++props.post.likes);
                            console.log(likes);
                        }}>💙 {props.post.likes}</button>
                        <button className='btn'>💬 {CommentsLength !== undefined ? CommentsLength.length : 0}</button>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

const PostsContainer = (props: {
    postsList: POSTS[],
    setpostOb: React.Dispatch<React.SetStateAction<POSTS | undefined>>,
    Comments: COMMENT
}) => {
    return (
        <React.Fragment>
            <div className='post'>
                {
                    props.postsList.map((post: POSTS, i: number) => <Post Comments={props.Comments} key={i} setpostOb={props.setpostOb} post={post} />)
                }
            </div>
        </React.Fragment>
    );
}

const PostsPage = (props: {
    setpostOb: React.Dispatch<React.SetStateAction<POSTS | undefined>>,
    Comments: COMMENT,
    posts: POSTS[]
}) => {
    document.title = 'Posts - Instagram Clone';
    return (
        <React.Fragment>
            <div className='posts-container'>
                <PostsContainer
                    postsList={props.posts}
                    setpostOb={props.setpostOb}
                    Comments={props.Comments}
                />
            </div>
        </React.Fragment>
    );
}

export default PostsPage;