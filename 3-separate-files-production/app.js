import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router';

class MyApp extends React.Component {
  render() {
    return <BrowserRouter />;
  }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
