import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ onAddList }) => (
  <button onClick={() => onAddList({ title: 'A New List', priority: 4 })}>
    Add New List
  </button>
);
Component.propTypes = {
  onAddList: PropTypes.func.isRequired,
};
export default Component;
