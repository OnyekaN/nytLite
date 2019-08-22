'use strict'
import React from 'react';
import ReactDOM from 'react-dom';


class MenuItem extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			dateOptions: {
			 	year: 'numeric',
				month: 'short',
				day: 'numeric'
			}
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.clickHandler(this.props.article);
	}

	render() {
		let article = this.props.article;
		let	date = (new Date(article.date))
								.toLocaleString('en-US', this.state.dateOptions);

		return (
			<div className="mu-item-entry" onClick={this.handleClick}>
				<h4 className={"mu-section"}>{article.section}</h4>
				<h4 className="mu-title">{article.title}</h4>
				<h4 className="mu-author">{article.author}</h4>
			</div>
		)
	}

}

export default MenuItem;
