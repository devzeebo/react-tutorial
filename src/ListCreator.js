import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddListButton from './AddListButton';

const Component = ({ onAddList }) => {
  const [newListTitle, setNewListTitle] = useState('My New List');

  return (
    <>
      <input type="text" value={newListTitle} onChange={e => setNewListTitle(e.target.value)} />
      <AddListButton
        onAddList={newList => onAddList(newList)}
        newListTitle={newListTitle}
      />
    </>
  );
};
Component.propTypes = {
  onAddList: PropTypes.func.isRequired,
};
export default Component;
