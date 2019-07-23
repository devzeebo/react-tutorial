import React, { useState, useEffect } from 'react';

import reduce from 'lodash/fp/reduce';

import SortedListOfLists from './SortedListOfLists';
import AddListButton from './AddListButton';

const addList = (todoLists, setTodoLists, newList) => {
  const newLists = [
    ...todoLists,
    newList,
  ];

  setTodoLists(newLists);
};

const Component = () => {
  const [todoLists, setTodoLists] = useState([
    { title: 'My First List', priority: 1 },
    { title: 'React 101 Lesson Plan', priority: 2 },
    { title: 'Shopping List', priority: 3 },
  ]);

  useEffect(() => {
    setTodoLists(reduce((newLists, list) => [
      ...newLists,
      {
        ...list,
        priority: newLists.length + 1,
      },
    ], [])(todoLists));
  }, [todoLists.length]);

  return (
    <div>
      <SortedListOfLists todoLists={todoLists} />
      <AddListButton onAddList={newList => addList(todoLists, setTodoLists, newList)} />
    </div>
  );
};
export default Component;
