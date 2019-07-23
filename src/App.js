import React from 'react';
import toUpper from 'lodash/fp/toUpper';
import get from 'lodash/fp/get';

const todoLists = [
  { title: 'My First List' },
  { title: 'React 101 Lesson Plan' },
  { title: 'Shopping List' },
];

const Component = () => (
  <div>
    <div>1. {toUpper(get('[0].title', todoLists))}</div>
    <div>2. {toUpper(get('[1].title', todoLists))}</div>
    <div>3. {toUpper(get('[2].title', todoLists))}</div>
  </div>
);
export default Component;
