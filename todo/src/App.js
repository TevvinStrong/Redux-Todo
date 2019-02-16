import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, markFinished, deleteTodo } from '../Actions';
import TodoList from './Components/TodoList';
import TodoInput from './Components/TodoInput';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <TodoInput
          addTodo={this.props.addTodo}
        />
        <TodoList
          todos={this.props.todos}
          markFinished={this.props.markFinished}
          deleteTodo={this.props.deleteTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { addTodo, markFinished, deleteTodo })(App);
