import React, { Component } from 'react';

class ListItem extends Component {
	deleteHandler(e){		
		this.props.deleteHandler(e);
	}

	render() {
		const value = this.props.value;
		const caption = (value.length > 14) ? (value.substring(0,20) + '...') : value;
		const titleValue = value;
		const altValue = value
		return (
			
				<li><span className="item-value" title={titleValue} alt={altValue}>{caption}</span> <span className="delete-button" data-id={this.props.id} onClick={this.deleteHandler.bind(this)}>[x]</span></li>	
			
		);
	}
}

export default ListItem;