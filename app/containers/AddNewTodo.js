import React, { Component, PropTypes } from 'react';

import './AddNewTodo.css';

const defaultTodoName = '';
class AddNewTodo extends Component {
	static propTypes = {
		addNewTodo: PropTypes.func.isRequired,
	}

	state = {
		todoName: defaultTodoName
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.todoName !== this.state.todoName;
	}

	inputChange = e => {
		const { value: todoName } = e.target;
		this.setState({
			todoName
		});
	}

	formSubmit = e => {
		e.preventDefault();
		const { todoName } = this.state;
		const { addNewTodo } = this.props;
		addNewTodo(todoName.trim());
		this.setState({
			todoName: defaultTodoName
		});
	}

	render() {
		const { todoName } = this.state;
		return (
			<form className="add-new-todo-form" onSubmit={this.formSubmit}>
				<input type="text" className="new-todo-name" value={todoName} onChange={this.inputChange}/>
				<button className="add-new-btn" disabled={!todoName.trim()}>Add</button>
			</form>
		);
	}
}

export default AddNewTodo;
