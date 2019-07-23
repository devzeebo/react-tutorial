import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import toUpper from 'lodash/fp/toUpper';

const Priority = styled.span`
margin-right: 1em;
`;

const PaddedCard = styled.div`
padding: .5em 1em .5em .25em;
transition: all .1s ease-in-out;
cursor: pointer;

:hover {
  background-color: #C3C3C3;
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.75);
}
`;

const TodoListTitle = ({ title, idx, ...props }) => (
  <PaddedCard {...props}>
    <Priority>{idx}.</Priority>
    <span>{toUpper(title)}</span>
  </PaddedCard>
);
TodoListTitle.propTypes = {
  title: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default TodoListTitle;
