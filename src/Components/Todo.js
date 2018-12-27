import React, { Component, Suspense } from 'react';
import '../Todo.css';
import Task from './Task';
import ErrorBoundary from './ErrorBoundary';

class Todo extends Component {
	constructor(props){
		super(props);
		this.taskOnKeyDown = this.taskOnKeyDown.bind(this);
		this.inputOnFocus = this.inputOnFocus.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.state = {items:[]}
	}

	taskOnKeyDown(e){
		var target = e.target;
		var container = this.state.items;
		if(e.keyCode === 13 && target.value !== ''){
			let id;
			if(!container.length){
				id=0;
			}else{
				id=container.length+1;
			}
			container.push({id: id, value:target.value});
			this.setState({items: container});
			target.value="";
		}
		
	}

	inputOnFocus(e){
		var target = e.target;
		
	}

	deleteTask(e){
		var target = e.target;
		var id = target.dataset.id;
		var items = this.state.items;
		if(id !== ''){
			items = items.filter((item)=> item.id.toString() !== id);			
		}

		this.setState({items: items});
	}

	render() {
		var taskList = this.state.items;
		
		return (
			<div>
				<ErrorBoundary> 
					<div className="todo-header">
						<div className="todo-container">
							<h3 style={{'color':'#fff', 'lineHeight':'10px'}}>Simple Todo</h3>
						</div>	
					</div>
					<div className="todo-container">
						<div className="panel">
							<div className="panel-head"><label htmlFor="">Enter a task :</label></div>
							<div className="panel-body">
								<div className="input-container">
									<input type="text" placeholder="Enter a task" onKeyDown={this.taskOnKeyDown} onFocus={this.inputOnFocus}/>
								</div>
							</div>
						</div>
						<div className="panel">
							<div className="panel-head"><label htmlFor="">Task list :</label></div>
							<div className="panel-body">
								<Task item={taskList} onDeleteTask={this.deleteTask}></Task>
							</div>
						</div>
						
					</div>
				

				</ErrorBoundary>
			</div>
		);
	}
}

export default Todo;