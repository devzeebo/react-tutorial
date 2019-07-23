import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import reduce from 'lodash/fp/reduce';
import find from 'lodash/fp/find';

import data from './data.json';

import ExpandedTodoList from './ExpandedTodoList';
import SortedListOfLists from './SortedListOfLists';
import ListCreator from './SortedListOfLists/ListCreator';

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
  const [todoLists, setTodoLists] = useState(data);

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
    <BrowserRouter>
      <Route path="/" exact component={() => (
        <CenteredDiv>
          <SortedListOfLists
            todoLists={todoLists}
            onClick={list => (window.location = `/${list.title}`)}
          />
          <ListCreator onAddList={newList => addList(todoLists, setTodoLists, newList)} />
        </CenteredDiv>
      )} />
      <Route path="/:title" exact component={({ match: { params: { title } } }) => (
        <ExpandedTodoList
          todoList={find({ title })(todoLists)}
        />
      )} />
    </BrowserRouter>
  );
};
export default Component;
