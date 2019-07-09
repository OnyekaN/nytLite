'use strict'
import React from 'react';
import ReactDOM from 'react-dom';


class MenuItem extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.clickHandler(this.props.article);
	}

	render() {
		let article = this.props.article;
		let	date = (new Date(article.article_date)).toDateString();

		return (
			<div className="article-entry" onClick={this.handleClick}>
				<p><b>{article.article_title}</b></p>
				<p>{date}</p>
			</div>
		)
	}

}

export default MenuItem;
