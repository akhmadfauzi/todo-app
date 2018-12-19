import React, { Component } from 'react';
import TaskList from './TaskList';


class Task extends Component {
	constructor(props){
		super(props)
		this.state = {items: this.props.item};
	}

	deleteTask(e){
		console.log(e.nativeEvent);
	}

	render() {
		var items = this.state.items;
		
		return (
			<div>
				<TaskList items={items} deleteTask={this.deleteTask.bind(this)}></TaskList>
			</div>
		);
	}
}

export default Task;