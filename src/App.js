import React from 'react';

import SortedListOfLists from './SortedListOfLists';
import AddListButton from './AddListButton';

const todoLists = [
  { title: 'My First List', priority: 1 },
  { title: 'React 101 Lesson Plan', priority: 2 },
  { title: 'Shopping List', priority: 3 },
];

const addList = (todoList) => {
  todoLists.push(todoList);
  console.log(todoLists);
};

const Component = () => (
  <div>
    <SortedListOfLists todoLists={todoLists} />
    <AddListButton onAddList={addList} />
  </div>
);
export default Component;
