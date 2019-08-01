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
			showMenu: 'show',
		}

		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);

	}

	onMouseEnter() {
		this.setState({showMenu: 'show'});
	}

	onMouseLeave() {
		this.setState({showMenu: 'hide'});
	}

	render() {
		return (
			<div className={'menu-container ' + this.state.showMenu}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}>
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

