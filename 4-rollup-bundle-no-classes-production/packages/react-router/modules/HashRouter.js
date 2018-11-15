import React from 'react';
import { createHashHistory } from 'history';
import inherits from './inherits';

inherits(HashRouter, React.Component);

function HashRouter() {
  React.Component.apply(this, arguments);
  this.history = createHashHistory();
  return this;
}

HashRouter.prototype.render = function() {
  return <p>Hash Router</p>;
};

if (__DEV__) {
  HashRouter.propTypes = {};
}

export default HashRouter;
