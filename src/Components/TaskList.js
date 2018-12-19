import React, { Component } from 'react';
import ListItem from './ListItem';

class TaskList extends Component {
	
	deleteTaskList(e){
		this.props.deleteTask(e);
	}

	render() {
		var items = this.props.items;
		var list = items.map((item, index)=>
			<ListItem key={index.toString()} id={index.toString()} value={item} deleteHandler={this.deleteTaskList.bind(this)}></ListItem>
		);
		return (
				<ul>
					{list}
				</ul>
		);
	}
}

export default TaskList;
