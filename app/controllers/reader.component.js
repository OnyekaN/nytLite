'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ReaderComponent extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			articleMarkup: '',
			dateOptions: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
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
		let article = this.props.article,
				article_date = (new Date(article.article_date))
												.toLocaleString('en-us', this.state.dateOptions),
				article_href = `https://nytimes.com/section/
											${article.article_section}/
											${article.article_path}`;
		return (
			<div className="reader-container">
				<div className="rdr-header">
					<p className="rdr-title">{article.article_title}</p>
					<p className="rdr-author">{article.article_author}</p>
					<p className="rdr-date">{article_date}</p>
				</div>
				<div className="rdr-article-body"
					dangerouslySetInnerHTML={{__html: this.state.articleMarkup}} />
				<div className="rdr-footer">
					Read: <a className="rdr-href" href={article_href}>{article.article_title}</a> on the <a href="nytimes.com">NyTimes</a> website.

				</div>
			</div>
		)
	}

}

export default ReaderComponent;


