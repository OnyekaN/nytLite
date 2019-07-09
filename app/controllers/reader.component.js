'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ReaderComponent extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			articleMarkup: ''
		}
		this.createMarkup = this.createMarkup.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if ( !!Object.keys(nextProps.article).length ) {
			this.createMarkup('articles/'+ nextProps.article.article_path);
		}
	}

	createMarkup(href) {
		let html = '';
		axios.get(href)
			.then(res => {
				html = res.data;
				this.setState({articleMarkup: html});
			});
	}


	render() {
		let article = this.props.article;
		return (
			<div className="reader-container">
				<h2 className="title">{article.article_title}</h2>
				<h3 className="author">{article.article_author}</h3>
				<div dangerouslySetInnerHTML={{__html: this.state.articleMarkup}} />
			</div>
		)
	}

}

export default ReaderComponent;
