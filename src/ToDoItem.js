import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = props => {
    return (
      <li>
        {props.newToDo}
      </li>
    );
  }
  
  ToDoItem.propTypes = {
    content: PropTypes.string,
  };
  export default ToDoItem;