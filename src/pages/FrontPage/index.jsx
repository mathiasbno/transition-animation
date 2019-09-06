import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';
import OpenIcon from '../../images/open-icon.svg';

class FrontPage extends Component {
  render() {
    return (
      <div className="frontPage">
        <span className="sharedBy"><b>Shared</b> by you</span>
        <div className="imageWrapper">
          <figure className="image"></figure>
        </div>
        <div className="content">
          <h1 className="title">Lost in Tokyo</h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at eleifend leo. Ut porta
            varius odio quis dapibus.
          </p>
        </div>
        <Link to='/article' className="icon">
          <img src={OpenIcon} alt="Open icon" />
        </Link>
      </div>
    )
  }
}

export default FrontPage;
