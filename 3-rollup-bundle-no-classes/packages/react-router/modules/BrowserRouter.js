import React from 'react';
import { createBrowserHistory } from 'history';
import inherits from './inherits';

inherits(BrowserRouter, React.Component);

function BrowserRouter() {
  React.Component.apply(this, arguments);
  this.history = createBrowserHistory();
  return this;
}

BrowserRouter.prototype.render = function() {
  return <p>Browser Router</p>;
};

if (__DEV__) {
  BrowserRouter.propTypes = {};
}

export default BrowserRouter;
