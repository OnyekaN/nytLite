'use strict'
import React from 'react';
import ReactDOM from 'react-dom';


class MenuItem extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			dateOptions: {
			 	year: 'numeric',
				month: 'long',
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
		let	date = (new Date(article.article_date))
								.toLocaleString('en-US', this.state.dateOptions);

		return (
			<div className="mu-article-entry" onClick={this.handleClick}>
				<span className="mu-section">{article.article_section}</span>
				<span className="mu-title">{article.article_title}</span>
				<span className="mu-date">{date}</span>
			</div>
		)
	}

}

export default MenuItem;
