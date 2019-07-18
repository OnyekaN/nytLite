'use strict'
import React from'react';
import ReactDOM from 'react-dom';


class MenuSort extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			sortOptions: ['Date', 'Section'],
			sortIndex: 0,
		}

		this.sortMenuItems = this.sortMenuItems.bind(this);
	}

	sortMenuItems() {
		let sortIndex = ++this.state.sortIndex % this.state.sortOptions.length;
		this.props.clickHandler(this.state.sortOptions[sortIndex]);
		this.setState({ sortIndex });

	}

	render() {
		return (
			<div className='mu-sort'>
				<button className='mu-sort-type'
					onClick={this.sortMenuItems}>
					{this.state.sortOptions[this.state.sortIndex]}
					&nbsp; ▼
				</button>
			</div>
		)
	}

}

export default MenuSort;
