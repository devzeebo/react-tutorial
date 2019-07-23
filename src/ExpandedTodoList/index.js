import React, { useState } from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/fp/map';

const Component = ({ todoList }) => {
  const [listItems] = useState(todoList.items);

  return (
    <div>
      <h1>{todoList.title}</h1>
      <ol>
        {map(listItem => (
          <li>
            <input type="checkbox" checked={listItem.checked} />
            <span>{listItem.title}</span>
          </li>
        ))(listItems)}
      </ol>
    </div>
  );
};
Component.propTypes = {
  todoList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
      }),
    ),
  }).isRequired,
};
export default Component;
