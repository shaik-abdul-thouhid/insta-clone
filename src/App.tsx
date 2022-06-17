import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import CommentsPage from './Comments';
import PostsPage from './Posts';
import NotFoundPage from './NotFoundPage';
import posts from './resources/posts';
import Comments from './resources/comments';

export type COMMENT_OB = {
	url: string;
	commentCode: string;
	commentNumbers: number;
	likesNumbers: number;
};

function App() {

	const [commentOb, setCommentOb] = useState<COMMENT_OB>();

	useEffect(function () {
		console.log(commentOb);
	}, [commentOb])

	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route path={'' || '/'} element={<PostsPage Comments={Comments} posts={posts} setCommentOb={setCommentOb} />} />
				<Route path="/comments/:commentId" element={<CommentsPage Comments={Comments} commentOb={commentOb!} />} />
				<Route path={"*" || "404"} element={<NotFoundPage />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
