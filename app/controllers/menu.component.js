'use strict'
import React from 'react';
import ReactDOM from 'react-dom';


class MenuComponent extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
		}

	}

	render() {
		return (
			<div className='menu-container'>
				<ul>
					{ [1, 2, 3, 4, 5].map((obj, i) => {
							return (
								<li key={i}>list item:{obj}</li>
							)
						}
					)}
				</ul>
			</div>
		)
	}

}

export default MenuComponent;
