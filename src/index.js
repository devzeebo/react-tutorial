import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  const mountPoint = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(mountPoint);

  ReactDOM.render(<App />, mountPoint);
});
