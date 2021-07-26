import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// mount function to start up the app
const mount = (htmlElem) => {
  ReactDOM.render(<App />, htmlElem);
};

// In ISOLATION and development
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// Running through CONTAINER
export { mount };
