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
			dates: [
				{ value: 2, string: "Two Weeks" },
				{ value: 3, string: "Three Weeks" },
				{ value: 4, string: "Four Weeks" },
				{ value: 5, string: "Five Weeks" },
				{ value: 6, string: "Six Weeks" },
				{ value: 7, string: "Seven Weeks" },
				{ value: 8, string: "Eight Weeks" }
			],
			sections: ['all', 'business', 'health', 'opinion', 'science',
									'sports', 'technology', 'us', 'world'],
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
		let date = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
								.toLocaleString('en-US', this.state.dateOptions)

		return (
			<div className='mu-sort-container'>
				<div>
					<h3 className='mu-sort-header'>Section</h3>
					<select className='mu-sort-select'
						onChange={this.onSectionSort}>
						{ this.state.sections.map((obj, i) => { return (
							<option value={obj} key={i}>{obj}</option>
						)})}
					</select>
				</div>
			</div>
		)
	}

}

/*
				<div>
					<h3 className='mu-sort-header'>Showing articles from the past:</h3>
					<select className='mu-sort-select'
						onChange={this.onDatesSort}>
						{ this.state.dates.map((obj, i) => { return (
							<option value={obj.value} key={i}>{obj.string}</option>
						)}) }
					</select>
				</div>
*/


export default MenuSort;
