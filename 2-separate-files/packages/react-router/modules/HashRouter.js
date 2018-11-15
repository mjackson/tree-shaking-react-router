import React from 'react';
import { createHashHistory } from 'history';

class HashRouter extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.history = createHashHistory();
  }

  render() {
    return <p>Hash Router</p>;
  }
}

export default HashRouter;
