import React, { Component } from 'react';
import './Article.css';

class Article extends Component {

  constructor (props) {
    super(props);
    
  }

  render() {

    return (
      <div className="article-card">
        <a className="card-link" href="#">
        <div className="article-image"><img className="image" src={this.props.articleData.imageURL} /></div>
        <div className="article-synopsis">
          <div className="article-title">{this.props.articleData.title}</div>
          <div className="article-text">{this.props.articleData.text}</div>
        </div>
        </a>
      </div>
    );
  }
}

export default Article;

/*
credit for reply button: <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for envelope icon: <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for heart icon: <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
credit for retweet icon: <div>Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

credit for Hadrien icons: <div>Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
*/
