import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import reduce from 'lodash/fp/reduce';

import SortedListOfLists from './SortedListOfLists';
import ListCreator from './ListCreator';

const CenteredDiv = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const addList = (todoLists, setTodoLists, newList) => {
  const newLists = [
    ...todoLists,
    newList,
  ];

  setTodoLists(newLists);
};

const useReprioritizeLists = () => {
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

  return [
    todoLists,
    setTodoLists,
  ];
};

const Component = () => {
  const [todoLists, setTodoLists] = useReprioritizeLists();

  return (
    <CenteredDiv>
      <SortedListOfLists todoLists={todoLists} />
      <ListCreator onAddList={newList => addList(todoLists, setTodoLists, newList)} />
    </CenteredDiv>
  );
};
export default Component;
