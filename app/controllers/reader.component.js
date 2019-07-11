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
				<div className="rdr-header">
					<p className="rdr-title">{article.article_title}</p>
					<p className="rdr-author">{article.article_author}</p>
					<p className="rdr-date">{(new Date(article.article_date)).toDateString()}</p>
				</div>
				<div className="rdr-article-body"
					dangerouslySetInnerHTML={{__html: this.state.articleMarkup}} />
			</div>
		)
	}

}

export default ReaderComponent;
