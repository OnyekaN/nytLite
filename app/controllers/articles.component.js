/* articles.component */
'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import MenuComponent from './menu.component';
import ReaderComponent from './reader.component';

const articlesJSON = require('../assets/articles.json');

class ArticlesComponent extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			allArticles: [],
			currentArticle: {},
		}

		this.onArticleSelect = this.onArticleSelect.bind(this);

	}

	componentDidMount() {

		let articles = [];
		Object.keys(articlesJSON).forEach((key) => {
			if ( articlesJSON[key].title.indexOf('Page Not Found') == -1 ) {
				articles.push(articlesJSON[key]);
			}
		});
		this.setState({ allArticles: articles });

	}

	onArticleSelect(article) {
		if ( false ) {
			return
		} else {
			this.setState({ currentArticle: article });
		}
	}

	render() {
		return (
			<div className="articles-container">
				<MenuComponent articles={this.state.allArticles}
					clickHandler={this.onArticleSelect} />
				<ReaderComponent article={this.state.currentArticle} />
			</div>
		);
	}

}

export default ArticlesComponent;
