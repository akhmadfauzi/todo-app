import React, { Component } from 'react';
import TaskList from './TaskList';


class Task extends Component {
	deleteTask(e){
		this.props.onDeleteTask(e);		
	}

	render() {
		var items = this.props.item;
		
		return (
			<div>
				<TaskList items={items} deleteTask={this.deleteTask.bind(this)}></TaskList>
			</div>
		);
	}
}

export default Task;