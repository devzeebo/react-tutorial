import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ onAddList, newListTitle }) => (
  <button onClick={() => onAddList({ title: newListTitle, priority: 4 })}>
    Add New List
  </button>
);
Component.propTypes = {
  onAddList: PropTypes.func.isRequired,
  newListTitle: PropTypes.string.isRequired,
};
export default Component;
