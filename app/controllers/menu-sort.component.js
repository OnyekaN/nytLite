'use strict'
import React from'react';
import ReactDOM from 'react-dom';


class MenuSort extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			sections: ['all', 'business', 'health', 'opinion', 'science',
									'sports', 'technology', 'us', 'world'],
			weeks: 2,
		}

		this.onDatesSort = this.onDatesSort.bind(this);
		this.onSectionSort = this.onSectionSort.bind(this);
	}

	onDatesSort(event) {
		this.props.dateHandler(event.target.value);
		this.setState({ weeks: event.target.value });
	}

	onSectionSort(event) {
		this.props.sectionHandler(event.target.value);
	}

	render() {
		return (
			<div className='mu-sort'>
				<div>
					<select className='mu-section-filter'
						onChange={this.onSectionSort}>
						{ this.state.sections.map((obj, i) => { return (
							<option value={obj} key={i}>{obj}</option>
						)})}
					</select>
				</div>
				<div>
					<input type='range'	onInput={this.onDatesSort}
						 defaultValue='2' min='1' max='8'/>
					<p>No Weeks: {this.state.weeks}</p>
				</div>
			</div>
		)
	}

}

export default MenuSort;
