import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

let postsData = {
	numposts: 3,
	posts: [
		{ 
			username: "timgrindall",
			displayName: "Timothy Grindall",
			text: "Testing 1 2 3 ...",
			date: "July 1st, 2019",
			articleData: {
				title: "Learning React? Start Small.",
				text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
				imageURL: "./images/article-image.jpg"
			},
			interactionData: {
				numReplies: 5,
				numRetweets: 9,
				numLikes: 10
			}
		},
		{
			username: "jgrindog",
			displayName: "Jonathan Grindall",
			text: "Hello from Seattle!",
			date: "July 4th, 2019",
			articleData: {
				title: "Learning React? Start Small.",
				text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
				imageURL: "./images/article-image.jpg"
			},
			interactionData: {
				numReplies: 5,
				numRetweets: 9,
				numLikes: 10
			}
		},
		{
			username: "graciannag",
			displayName: "Grace Grindall",
			text: "What's up?",
			date: "July 8th, 2019",
			articleData: {
				title: "Learning React? Start Small.",
				text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
				imageURL: "./images/article-image.jpg"
			},
			interactionData: {
				numReplies: 5,
				numRetweets: 9,
				numLikes: 10
			}
		}
	]
}

ReactDOM.render(<App posts={postsData}/>, document.getElementById('root'));

/*
old component info passed to render method:
 <Card username="timgrindall" displayName="Timothy Grindall" date="July 17, 2019" postText="Learning React? Start Small." numbers={interactionData} articleData={articleData} />
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
