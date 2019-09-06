// ./src/App.js
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Article from './pages/Article';
import FrontPage from './pages/FrontPage';

class App extends Component {
  render() {
    return (
      <Route render={({ location }) => (
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            appear={true}
            timeout={{ enter: 1000, exit: 1000 }}
          >
            <Switch location={location}>
              <Route key="/" path="/" exact component={FrontPage}></Route>
              <Route key="/article" path="/article" exact component={Article}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    );
  }
}

export default App;
