import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router';

class MyApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
