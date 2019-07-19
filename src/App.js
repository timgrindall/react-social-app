import React, { Component } from 'react';
import Card from "./Card.js";
import "./App.css";

let interactionData = {
	numReplies: 5,
	numRetweets: 9,
	numLikes: 10
};

let articleData = {
	title: "Learning React? Start Small.",
	text: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
	imageURL: "./images/article-image.jpg"
};

class App extends Component {

	constructor (props) {
		super(props);

		this.state = {};
	}

	render() {
		const posts = this.props.posts;
		const cardsList = posts.posts.map((post) => 
			<Card username={post.username} displayName={post.displayName} date={post.date} postText={post.text} numbers={post.interactionData} articleData={post.articleData} />
		);

		return (
			<div className="container">
				<div>{cardsList}</div>
				<div className="credit">Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
			</div>
		);
	}
}

export default App;