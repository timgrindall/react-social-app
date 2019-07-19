import React, { Component } from 'react';
import './Card.css';
import Article from './Article';

class Card extends Component {

  constructor (props) {
    super(props);
  }

  render() {

    return (
      <div className="card">
        <div className="left-col">
          <div className="profile-picture"></div>
        </div>
        <div className="right-col">
          <div className="user-data">
            <div className="display-name">{this.props.displayName}</div>
            <div className="username">@{this.props.username}</div>
            <div className="post-date">· {this.props.date}</div>
          </div>
          <div className="post-text">{this.props.postText}</div>
          <Article articleData={this.props.articleData}/>
          <div className="buttons">
            <a href="#"><img className="button-icon reply-icon" src="./icons/speech-bubble.svg" alt="reply button" /></a> 
            <div className="numbers">{this.props.numbers.numReplies}</div>
            <a href="#"><img className="button-icon retweet-icon" src="./icons/retweet.svg" alt="retweet" /></a> 
            <div className="numbers">{this.props.numbers.numRetweets}</div>
            <a href="#"><img className="button-icon heart-icon" src="./icons/heart.svg" alt="like" /></a> 
            <div className="numbers">{this.props.numbers.numLikes}</div>
            <a href="#"><img className="button-icon envelope-icon" src="./icons/envelope.svg" alt="direct message" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

/*
credit for reply button: <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for envelope icon: <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for heart icon: <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for retweet icon: <div>Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

credit for Hadrien icons: <div>Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/
