import React from 'react';
import { createBrowserHistory } from 'history';

class BrowserRouter extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  render() {
    return <p>Browser Router</p>;
  }
}

export default BrowserRouter;
