import React from 'react';
import inherits from './inherits';

function Route() {
  React.Component.apply(this, arguments);
  return this;
}

Route.prototype.render = function() {
  return <p>Route</p>;
};

if (__DEV__) {
  Route.propTypes = {};
}

export default Route;
