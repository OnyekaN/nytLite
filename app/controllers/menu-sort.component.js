'use strict'
import React from'react';
import ReactDOM from 'react-dom';


class MenuSort extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			dateOptions: {
				year:	'numeric',
        month: 'long',
        day: 'numeric'
			},
			days: 7,
			sections: ['all', 'business', 'health', 'opinion', 'science',
									'sports', 'technology', 'us', 'world'],
		}

		this.onDatesSort = this.onDatesSort.bind(this);
		this.onSectionSort = this.onSectionSort.bind(this);
	}

	onDatesSort(event) {
		this.props.dateHandler(event.target.value);
		this.setState({ days: event.target.value });
	}

	onSectionSort(event) {
		this.props.sectionHandler(event.target.value);
	}

	render() {
		let date = new Date(Date.now() - 1000 * 60 * 60 * 24 * this.state.days)
								.toLocaleString('en-US', this.state.dateOptions)

		return (
			<div className='mu-sort'>
				<div>
					<h4>Section:</h4>
					<select className='mu-section-filter'
						onChange={this.onSectionSort}>
						{ this.state.sections.map((obj, i) => { return (
							<option value={obj} key={i}>{obj}</option>
						)})}
					</select>
				</div>
				<div>
					<h4>Showing articles since:</h4>
					<p>{date}</p>
					<input type='range'	onInput={this.onDatesSort}
						 defaultValue='7' min='7' max='60'/>
				</div>
			</div>
		)
	}

}

export default MenuSort;
