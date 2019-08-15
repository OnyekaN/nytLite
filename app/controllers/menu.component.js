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
			showMenu: 'hide',
		}

		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onTouchClick = this.onTouchClick.bind(this);

	}

	onMouseEnter() {
		this.setState({showMenu: 'show'});
	}

	onMouseLeave() {
		this.setState({showMenu: 'hide'});
	}

	onTouchClick() {
		if ( this.state.showMenu === 'show' ) {
			this.state.showMenu = 'hide';
		} else if ( this.state.showMenu === 'hide' ) {
			this.state.showMenue = 'show';
		} else {
			return false;
		}
	}

	render() {
		return (
			<div>
				<div className={'menu-container ' + this.state.showMenu}
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}>
					<MenuSort dateHandler={this.props.dateHandler}
						sectionHandler={this.props.sectionHandler}/>
					<div className='mu-items-container'>
						{ this.props.articles.map((obj, i) => { return (
								<MenuItem key={i} article={obj}
									clickHandler={this.props.selectHandler}/>
							)}
						)}
					</div>
				</div>
				<div className={'menu-placeholder mu-' + this.state.showMenu}
					onClick={this.onTouchClick}>
					<p>
						<i className="fas fa-align-justify"></i>
					</p>
				</div>
			</div>
		)
	}

}

export default MenuComponent;

