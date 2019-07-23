import React from 'react';
import ReactDOM from 'react-dom';

import forEach from 'lodash/forEach';

import App from './App';

const createElement = (tag, attrs, content = undefined) => {
  const ele = document.createElement(tag);

  forEach(attrs, (v, k) => (ele[k] = v));

  if (content) {
    ele.innerHTML = content;
  }

  return ele;
};

document.addEventListener('DOMContentLoaded', () => {
  document.head.appendChild(createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
    rel: 'stylesheet',
  }));
  document.head.appendChild(createElement('style', {}, `
    body {
      font-family: Roboto;
    }
  `));

  const mountPoint = document.createElement('div');
  document.body.appendChild(mountPoint);

  ReactDOM.render(<App />, mountPoint);
});
