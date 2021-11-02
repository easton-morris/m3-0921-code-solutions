import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong.');
        } else {
          return res.json();
        }
      })
      .then(todos => {
        return this.setState({
          todos
        });
      })
      .catch(err => console.error(err));
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong.');
        } else {
          return res.json();
        }
      }
      )
      .then(todo => {
        return this.setState({
          todos: [...this.state.todos, todo]
        });
      })
      .catch(err => console.error(err));
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * Do not mutate the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
  }

  toggleCompleted(todoId) {
    const targetTodoIndex = this.state.todos.findIndex(element => element.todoId === todoId);
    const targetTodo = this.state.todos[targetTodoIndex];
    const currentStatus = targetTodo.isCompleted;
    const updatedStatus = !currentStatus;

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isCompleted: updatedStatus
      })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong.');
        } else {
          return res.json();
        }
      }
      )
      .then(todo => {
        const newTodos = [...this.state.todos];
        const targetIndex = newTodos.findIndex(element => element.todoId === todoId);
        newTodos[targetIndex] = todo;
        return this.setState({
          todos: newTodos
        }
        );
      })
      .catch(err => console.error(err));
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
