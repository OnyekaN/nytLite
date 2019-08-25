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
		if ( this.state.showMenu === 'hide' ) {
			this.setState({showMenu: 'show'});
		}
	}

	onMouseLeave() {
		if ( this.state.showMenu === 'show' ) {
			this.setState({showMenu: 'hide'});
		}
	}

	onTouchClick() {
		if ( this.state.showMenu === 'show' ) {
			this.setState({ showMenu: 'hide' });
		} else if ( this.state.showMenu === 'hide' ) {
			this.setState({ showMenu: 'show' });
		} else {
			return false;
		}
	}

	render() {
		return (
			<div>
				<div className={'menu-container ' + this.state.showMenu}
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
					//onMouseEnter={this.onTouchClick}
					onClick={this.onTouchClick}>
					<p className="mu-icon"><i className="fas fa-align-justify"></i></p>
				</div>
				<div className={'menu-background mu-' + this.state.showMenu}
					onClick={this.onTouchClick}>
				</div>
			</div>
		)
	}

}

export default MenuComponent;

