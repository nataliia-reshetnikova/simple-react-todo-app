import React, { Component} from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDoList extends Component{
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.string)
    }
    render(){
        const todos = this.props.todos.map((newToDo, index) => (
            <ToDoItem
              key={index}
              newToDo={newToDo}
            />
          ));
        return(
            <div className="ToDoList">
                {todos}
            </div>
        );
    }
}
   export default ToDoList;