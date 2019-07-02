'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './menu-item.component.js';


class MenuComponent extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			selectedArticle: this.props.articles[0],
		}

	}

	render() {
		return (
			<div className='menu-container'>
				{ this.props.articles.map((obj, i) => { return (
						<MenuItem key={i} article={obj}
							clickHandler={this.props.clickHandler}/>
					)}
				)}
			</div>
		)
	}

}

export default MenuComponent;

