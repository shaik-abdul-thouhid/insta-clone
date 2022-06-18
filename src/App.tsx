import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import CommentsPage from './Comments';
import PostsPage from './Posts';
import NotFoundPage from './NotFoundPage';
import posts, { POSTS } from './resources/posts';
import Comments from './resources/comments';


function App() {

	const [postOb, setPostOb] = useState<POSTS | undefined>(undefined);

	useEffect(function () {
		if (window.location.pathname === '/') setPostOb(undefined);
		console.log(postOb);
	}, [postOb]);

	return (
		<React.Fragment>
			<Header />
			<div className='main-app-container'>
				<Routes>
					<Route path={'' || '/'} element={<PostsPage Comments={Comments} posts={posts} setpostOb={setPostOb} />} />
					<Route path="/comments/:commentId" element={<CommentsPage Comments={Comments} postOb={postOb!} />} />
					<Route path={"*" || "404"} element={<NotFoundPage />} />
				</Routes>
			</div>
		</React.Fragment>
	);
}

export default App;

