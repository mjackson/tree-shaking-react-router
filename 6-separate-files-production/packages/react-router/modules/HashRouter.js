import React from 'react';
import { createHashHistory } from 'history';

class HashRouter extends React.Component {
  history = createHashHistory();

  render() {
    return <p>Hash Router</p>;
  }
}

HashRouter.propTypes = {};

export default HashRouter;
