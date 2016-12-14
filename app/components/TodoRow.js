import React, { Component, PropTypes } from 'react';

import './TodoRow.css';

class TodoRow extends Component {
	static propTypes = {
		todo: PropTypes.object.isRequired,
		toggleTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired
	}

	render() {
		const { todo: { id, name, isComplete }, toggleTodo, deleteTodo } = this.props;
		return (
			<div className="todo-row-wrapper">
				<button type="button" className="delete-todo" onClick={() => deleteTodo(id)}>&times;</button>
				<label className="todo-label">
					<input className="checkbox" type="checkbox" checked={isComplete} onChange={() => toggleTodo(id)}/>
					<span className="text">{name}</span>
				</label>
			</div>

		);
	}
}

export default TodoRow;
