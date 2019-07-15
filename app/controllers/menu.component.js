'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './menu-item.component.js';
import MenuSort from './menu-sort.component.js';


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
				<MenuSort clickHandler={this.props.sortHandler}/>
				<div className='mu-items-container'>
					{ this.props.articles.map((obj, i) => { return (
							<MenuItem key={i} article={obj}
								clickHandler={this.props.selectHandler}/>
						)}
					)}
				</div>
			</div>
		)
	}

}

export default MenuComponent;

