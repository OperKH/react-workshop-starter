import React, { Component, PropTypes } from 'react';

import './TodoFilters.css';

class TodoFilters extends Component {
	static propTypes = {
		isCompleteFilter: PropTypes.any,
		changeTodoFilter: PropTypes.func.isRequired
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.isCompleteFilter !== this.props.isCompleteFilter;
	}

	render() {
		const { changeTodoFilter, isCompleteFilter } = this.props;
		return (
			<div className="filter-btn-wrapper">
				<button type="button" className={`filter-btn ${isCompleteFilter === null ? 'active' : ''}`} onClick={() => {changeTodoFilter(null);}}>All</button>
				<button type="button" className={`filter-btn ${isCompleteFilter === true ? 'active' : ''}`} onClick={() => {changeTodoFilter(true);}}>Competed</button>
				<button type="button" className={`filter-btn ${isCompleteFilter === false ? 'active' : ''}`} onClick={() => {changeTodoFilter(false);}}>Non-Completed</button>
			</div>
		);
	}
}

export default TodoFilters;
