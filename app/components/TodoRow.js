import React, { Component, PropTypes } from 'react';

import './TodoRow.css';

class TodoRow extends Component {
	static propTypes = {
		todo: PropTypes.object.isRequired,
		toggleTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired,
		changeTodoName: PropTypes.func.isRequired
	}

	state = {
		isEdit: false,
		localname: '123456'
	}

	isEditTask = () => {
		this.setState({
			isEdit: !this.state.isEdit,
			localname: this.props.todo.name
		});
	}

	changeTodoNameSubmitHandler = e => {
		e.preventDefault();
		const { todo: { id }, changeTodoName } = this.props;
		const name = this.state.localname.trim();
		changeTodoName({id, name});
		this.setState({
			isEdit: false,
		});
	}

	changeTodoNameResetHandler = () => {
		this.setState({
			isEdit: false,
			localname: this.props.todo.name
		});
	}

	localNameChange = e => {
		this.setState({
			localname: e.target.value
		});
	}

	render() {
		const { isEdit, localname } = this.state;
		const localnameTrim = localname.trim();
		const { todo: { id, name, isComplete }, toggleTodo, deleteTodo } = this.props;
		return (
			<div className="todo-row-wrapper">
				<button type="button" className="delete-todo" onClick={() => deleteTodo(id)}>&times;</button>
				<label className="todo-label">
					<input className="checkbox" type="checkbox" checked={isComplete} onChange={() => toggleTodo(id)}/>
					{
						isEdit ?
						<form className="edit-todo-form" onSubmit={this.changeTodoNameSubmitHandler} onReset={this.changeTodoNameResetHandler}>
							<input className="text" value={localname} onChange={this.localNameChange}></input>
							<button disabled={localnameTrim === name || !localnameTrim}>Save</button>
							<button type="reset">Cancel</button>
						</form> :
						<span className="text" onDoubleClick={this.isEditTask}>{name}</span>
					}
				</label>
			</div>
		);
	}
}

export default TodoRow;
