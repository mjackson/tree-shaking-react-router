import React from 'react';
import { createHashHistory } from 'history';

class HashRouter extends React.Component {
  history = createHashHistory();

  render() {
    return <p>Hash Router</p>;
  }
}

if (__DEV__) {
  HashRouter.propTypes = {};
}

export default HashRouter;
