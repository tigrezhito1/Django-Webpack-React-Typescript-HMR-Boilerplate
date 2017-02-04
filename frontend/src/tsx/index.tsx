import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from 'tsx/App';

ReactDom.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root'),
);

// Hot Reload Module API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('tsx/App').default;
    ReactDom.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}