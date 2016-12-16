import React, { Component } from 'react';
import AddNewTodo from '../components/AddNewTodo';
import TodoList from '../components/TodoList';
import TodoFilters from '../components/TodoFilters';

import { randomId } from '../utils';

import './App.css';

class App extends Component {
	state = {
		todoList: [],
		isCompleteFilter: null
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

	changeTodoFilter = isCompleteFilter => {
		this.setState({isCompleteFilter});
	}

	getFilteredTodos() {
		const { isCompleteFilter, todoList } = this.state;
		return isCompleteFilter === null ? todoList : todoList.filter(todo => todo.isComplete === isCompleteFilter);
	}

	render() {
		const { isCompleteFilter } = this.state;
		return (
			<section className="todo-wrapper">
				<h2>Todo:</h2>
				<AddNewTodo addNewTodo={this.addNewTodo} />
				<TodoList todos={this.getFilteredTodos()} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} changeTodoName={this.changeTodoName} />
				<TodoFilters changeTodoFilter={this.changeTodoFilter} isCompleteFilter={isCompleteFilter} />
			</section>
		);
	}
}

export default App;
