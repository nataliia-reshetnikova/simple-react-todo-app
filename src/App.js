import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import  ToDoList from './ToDoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {todos:[],
    newToDo:''};
  }
    
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>
              Simple Todo App
            </h1>
          </header>
          <form onSubmit={(e) => {
                e.preventDefault();
                const todos = [...this.state.todos, this.state.newToDo];
                this.setState({todos, newToDo: ''});
              }}>
                <input
                  type="text"
                  name="newToDo"
                  value={this.state.newToDo}
                  placeholder = "What should be done?"
                  onChange={(e) => {
                    this.setState({[e.target.name]: e.target.value})
                  }}
                />
                  <button
                  type="submit"
                  >
                SAVE
                </button>
              </form>
              <ToDoList todos={this.state.todos} />
        </div>
    );
  }
}

export default App;
