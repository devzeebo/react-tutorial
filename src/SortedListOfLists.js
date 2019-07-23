import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import map from 'lodash/fp/map';
import sortBy from 'lodash/fp/sortBy';
import flow from 'lodash/fp/flow';

import TodoListTitle from './TodoListTitle';

const SpacedTodoListTitle = styled(TodoListTitle)`
&:not(:last-child) {
  margin-bottom: 1em;
}
`;

const ColumnDiv = styled.div`
display: flex;
flex-direction: column;
`;

const Component = ({ todoLists }) => (
  <ColumnDiv>
    {flow(
      sortBy('priority'),
      map(({ priority, title }) => (
        <SpacedTodoListTitle
          key={title}
          idx={priority}
          title={title}
        />
      )),
    )(todoLists)}
  </ColumnDiv>
);
Component.propTypes = {
  todoLists: PropTypes.arrayOf(
    PropTypes.shape({
      priority: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Component;
