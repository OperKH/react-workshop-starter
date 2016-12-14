import React, { Component, PropTypes } from 'react';
import TodoRow from './TodoRow';

import './TodoList.css';

class TodoList extends Component {
	static propTypes = {
		todos: PropTypes.array.isRequired,
		toggleTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired
	}

	render() {
		const { todos, toggleTodo, deleteTodo } = this.props;
		const todosLi = todos.map(({id, name, isComplete}) =>
			<li key={id}>
				<TodoRow todo={{id, name, isComplete}} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
			</li>
		);
		return (
			<ul className="todo-list">
				{todosLi}
			</ul>
		);
	}
}

export default TodoList;
