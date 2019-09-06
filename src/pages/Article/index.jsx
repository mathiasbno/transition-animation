import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';
import CloseIcon from '../../images/close-icon.svg';
import CommentIcon from '../../images/comment-icon.svg';

class Article extends Component {
  render() {
    return (
      <div className="article">
        <figure className="image"></figure>
        <Link to='/' className="close">
          <img src={CloseIcon} alt="Close icon" />
        </Link>
        <div className="content">
          <h1 className="title">Lost in Tokyo</h1>
          <span className="author">By Jonathan Vik</span>
        </div>
        <span className="comment">
          8 <img src={CommentIcon} alt="Comment icon" />
        </span>
      </div>
    )
  }
}

export default Article;
