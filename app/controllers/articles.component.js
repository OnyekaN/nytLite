/* articles.component */
'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import MenuComponent from './menu.component';
import ReaderComponent from './reader.component';

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

		let allArticles = [];
		Axios.get('/api/articles')
			.then(res => {
				let articlesJSON = res.data;
				Object.keys(articlesJSON).forEach((key) => {
					allArticles.push(articlesJSON[key]);
				});
			}).then(() => {
				allArticles.sort(this.articlesSectionSort);
				this.setState({allArticles})
				this.setState({currentArticle: allArticles[0]});
			});

	}

	articlesDateSort(a, b) {
		if ( a.article_date > b.article_date ) {
			return -1;
		} if ( a.article_date < b.article_date ) {
			return 1;
		}
		return 0;
	}

	articlesSectionSort(a, b) {
		if ( a.article_section < b.article_section ) {
			return -1;
		} if ( a.article_section > b.article_section ) {
			return 1;
		}
		return 0;
	}

	onArticleSelect(currentArticle) {
		if ( false ) {
			return
		} else {
			this.setState({ currentArticle: currentArticle	});
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
