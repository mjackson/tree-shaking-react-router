import React from 'react';
import { createBrowserHistory } from 'history';

class BrowserRouter extends React.Component {
  history = createBrowserHistory();

  render() {
    return <p>Browser Router</p>;
  }
}

if (__DEV__) {
  BrowserRouter.propTypes = {};
}

export default BrowserRouter;
