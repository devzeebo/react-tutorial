import React from 'react';
import get from 'lodash/fp/get';

import TodoListTitle from './TodoListTitle';

const todoLists = [
  { title: 'My First List' },
  { title: 'React 101 Lesson Plan' },
  { title: 'Shopping List' },
];

const Component = () => (
  <div>
    <TodoListTitle idx={0} title={get('[0].title', todoLists)} />
    <TodoListTitle idx={1} title={get('[1].title', todoLists)} />
    <TodoListTitle idx={2} title={get('[2].title', todoLists)} />
  </div>
);
export default Component;
