'use strict'
import React from'react';
import ReactDOM from 'react-dom';


class MenuSort extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			sections: ['all', 'business', 'health', 'politics', 'science',
								'sports', 'tech', 'us', 'world'],
			sortIndex: 0,
			sortOptions: ['Date', 'Section'],
		}

		this.sortMenuItems = this.sortMenuItems.bind(this);
	}

	sortMenuItems(event) {
		this.props.clickHandler(event.target.value);
	}

	render() {
		return (
			<div className='mu-sort'>
				<select className='mu-section-filter'
					onChange={this.sortMenuItems}>
					{ this.state.sections.map((obj, i) => { return (
						<option value={obj} key={i}>{obj}</option>
					)})}
				</select>
			</div>
		)
	}

}

export default MenuSort;
