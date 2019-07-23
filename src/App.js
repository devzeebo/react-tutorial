import React from 'react';

import SortedListOfLists from './SortedListOfLists';

const todoLists = [
  { title: 'My First List', priority: 1 },
  { title: 'React 101 Lesson Plan', priority: 2 },
  { title: 'Shopping List', priority: 3 },
];

const Component = () => (
  <div>
    <SortedListOfLists todoLists={todoLists} />
  </div>
);
export default Component;
