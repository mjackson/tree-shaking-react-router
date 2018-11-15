import { createHashHistory, createBrowserHistory } from 'history';
import React from 'react';

function inherits(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

inherits(HashRouter, React.Component);

function HashRouter() {
  React.Component.apply(this, arguments);
  this.history = createHashHistory();
  return this;
}

HashRouter.prototype.render = function () {
  return React.createElement("p", null, "Hash Router");
};

if (process.env.NODE_ENV !== "production") {
  HashRouter.propTypes = {};
}

inherits(BrowserRouter, React.Component);

function BrowserRouter() {
  React.Component.apply(this, arguments);
  this.history = createBrowserHistory();
  return this;
}

BrowserRouter.prototype.render = function () {
  return React.createElement("p", null, "Browser Router");
};

if (process.env.NODE_ENV !== "production") {
  BrowserRouter.propTypes = {};
}

function Route() {
  React.Component.apply(this, arguments);
  return this;
}

Route.prototype.render = function () {
  return React.createElement("p", null, "Route");
};

if (process.env.NODE_ENV !== "production") {
  Route.propTypes = {};
}

export { HashRouter, BrowserRouter, Route };
