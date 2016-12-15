import React, { Component } from 'react';
import AddNewTodo from './AddNewTodo';
import TodoList from '../components/TodoList';

import { randomId } from '../utils';

import './App.css';

class App extends Component {
	state = {
		todoList: []
	}

	addNewTodo = todoName => {
		const { todoList } = this.state;
		this.setState({
			todoList: [
				...todoList,
				{
					id: randomId(),
					name: todoName,
					isComplete: false
				}
			]
		});
	}

	toggleTodo = id => {
		const { todoList } = this.state;
		this.setState({
			todoList: todoList.map(todo => todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo)
		});
	}

	deleteTodo = id => {
		const { todoList } = this.state;
		this.setState({
			todoList: todoList.filter(todo => todo.id !== id)
		});
	}

	changeTodoName = (change) => {
		const {id, name} = change;
		const { todoList } = this.state;
		this.setState({
			todoList: todoList.map(todo => todo.id === id ? {...todo, name} : todo )
		});
	}

	render() {
		const { todoList } = this.state;
		return (
			<section className="todo-wrapper">
				<h2>Todo:</h2>
				<AddNewTodo addNewTodo={this.addNewTodo} />
				<TodoList todos={todoList} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} changeTodoName={this.changeTodoName} />
			</section>
		);
	}
}

export default App;
