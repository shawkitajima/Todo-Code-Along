import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: null,
      todos: []
    }
  }

  handleClick = () => {
    let todo = {
      todo: this.state.current,
      completed: false,
    }
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({todos});
  }

  toggle = idx => {
    let todos = [...this.state.todos];
    todos[idx].completed = !todos[idx].completed;
    this.setState({todos});
  }

  updateCurrent = evt => {
    this.setState({current: evt.target.value});
  }


  render() {
      return (
      <div className="App">
        <h1>Hello World, Here are my todos!</h1>
        {this.state.todos.length ? (
          <div>
            {this.state.todos.map((todo, idx) => (
              <div key={idx}>
                <div style={{color: todo.completed ? 'green' : 'red'}} onClick={() => this.toggle(idx)}>{todo.todo}</div>
              </div>
            ))}
          </div>
        ): (
          <div>You have no todos </div>
        )}
        <input placeholder='add a todo' onChange={evt => this.updateCurrent(evt)} />
        <button onClick={this.handleClick}>Add!</button>
      </div>
    );
  }
}

export default App;
