import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/fp/map';
import sortBy from 'lodash/fp/sortBy';
import flow from 'lodash/fp/flow';

import TodoListTitle from './TodoListTitle';

const Component = ({ todoLists }) => (
  flow(
    sortBy('priority'),
    map(({ priority, title }) => (
      <TodoListTitle
        key={title}
        idx={priority}
        title={title}
      />
    )),
  )(todoLists)
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
