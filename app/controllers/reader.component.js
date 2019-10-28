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
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
		}
		this.myRef = React.createRef();
		this.createMarkup = this.createMarkup.bind(this);
	}

	componentDidUpdate(prevProps) {
		if ( prevProps.article !== this.props.article ) {
			this.myRef.current.scrollTo(0, 0);
		}
	}

	componentWillReceiveProps(nextProps) {
		if ( !!Object.keys(nextProps.article).length ) {
			this.createMarkup('articles/'+ nextProps.article.path);
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
				article_date = article.date ? (new Date(article.date))
												.toLocaleString('en-us', this.state.dateOptions) : "",
				article_href = `https://nytimes.com/section/
											${article.section}/
											${article.path}`;
		return (
			<div className="reader-container" ref={this.myRef}>
				<div className="rdr-header">
					<p className="rdr-section">{article.section}</p>
					<p className="rdr-title">{article.title}</p>
					<p className="rdr-author">{article.author}</p>
					<p className="rdr-date">{article_date}</p>
				</div>
				<div className="rdr-article-body"
					dangerouslySetInnerHTML={{__html: this.state.articleMarkup}} />
				<div className="rdr-footer">
					<p align="center">
						Read <i>{article.title}</i> and other <b>New York Times</b> articles on <a href="https://nytimes.com">The New York Times</a> website.
					</p>
				</div>
			</div>
		)
	}

}

export default ReaderComponent;


