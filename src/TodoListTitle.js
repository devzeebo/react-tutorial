import React from 'react';
import PropTypes from 'prop-types';
import toUpper from 'lodash/fp/toUpper';

const TodoListTitle = ({ title, idx }) => (
  <div>{idx}. {toUpper(title)}</div>
);
TodoListTitle.propTypes = {
  title: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

export default TodoListTitle;
