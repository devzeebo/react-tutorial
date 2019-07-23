import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AddListButton from './AddListButton';

const Fab = styled.button`
position: fixed;
border: none;
right: 5rem;
bottom: 5rem;
width: 2em;
height: 2em;
font-size: 1.5em;
border-radius: 1em;
background-color: green;
box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.75);
transition: all .1s ease-in-out;
cursor: pointer;

:focus {
  outline: none;
}
:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.75);
}
:active {
  transform: translate(1px, 1px);
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75);
}
`;

const Modal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
padding: 1em 1em .5em 1em;
background-color: white;
box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.75);
border: 1px solid #ccc;

> * {
  margin-bottom: .5em;
}

h2 {
  margin: 0;
  margin-bottom: 1em;
}
`;
const ActionButtons = styled.div`
display: flex;
> * {
  flex: 1 0 0%;
  &:not(:last-child) {
    margin-right: 1em;
  }
}
`;

const closeModalAndAddList = (onAddList, setModalOpen, newList) => {
  setModalOpen(false);
  onAddList(newList);
};

const Component = ({ onAddList }) => {
  const [newListTitle, setNewListTitle] = useState('My New List');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && (
        <Modal>
          <h2>Create a new Todo List:</h2>
          <input type="text" value={newListTitle} onChange={e => setNewListTitle(e.target.value)} />
          <ActionButtons>
            <button onClick={() => setModalOpen(false)}>Cancel</button>
            <AddListButton
              onAddList={newList => closeModalAndAddList(onAddList, setModalOpen, newList)}
              newListTitle={newListTitle}
            />
          </ActionButtons>
        </Modal>
      )}
      <Fab onClick={() => setModalOpen(true)}>
        +
      </Fab>
    </>
  );
};
Component.propTypes = {
  onAddList: PropTypes.func.isRequired,
};
export default Component;
