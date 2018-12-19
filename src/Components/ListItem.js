import React, { Component } from 'react';

class ListItem extends Component {
	deleteHandler(e){		
		this.props.deleteHandler(e);
	}

	render() {
		return (
			<div>
				<li>{this.props.value} <span data-id={this.props.id} onClick={this.deleteHandler.bind(this)}>[x]</span></li>	
			</div>
		);
	}
}

export default ListItem;