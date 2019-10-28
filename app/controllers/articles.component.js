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
			displayArticles: [],
			currentArticle: {},
		}

		this.onArticleSelect = this.onArticleSelect.bind(this);
		this.onDateRangeFilter = this.onDateRangeFilter.bind(this);
		this.onSectionSort = this.onSectionSort.bind(this);

	}

	componentDidMount() {

		let allArticles = [],
				displayArticles = [];
		Axios.get('/api/articles')
			.then(res => {
				let articlesJSON = res.data;
				Object.keys(articlesJSON).forEach((key) => {
					allArticles.push(articlesJSON[key]);
				});
			}).then(() => {
				allArticles = displayArticles = this.onDateRangeFilter(allArticles);
				console.log(allArticles);
				this.setState({allArticles});
				this.setState({displayArticles})
				this.setState({currentArticle: displayArticles[0]});
			});

	}

	onArticleSelect(currentArticle) {
		if ( false ) {
			return
		} else {
			this.setState({ currentArticle });
		}
	}

	articlesDateSort(a, b) {
		if ( a.date > b.date ) {
			return -1;
		} if ( a.date < b.date ) {
			return 1;
		}
		return 0;
	}

	onDateRangeFilter(articles) {
		if ( false ) {
			return;
		}
		articles.sort(this.articlesDateSort);
		let filteredArticles = articles.filter((a) => {
					let today = Date.now(),
							dateRange = 1000 * 60 * 60 * 24 * 7 * 2,
							articleDate = new Date(a.date);
					if ( today - articleDate <= dateRange )
						return a;
		});
		return filteredArticles;
	}

	onSectionSort(sortOption) {
		if ( false )
			return
		let displayArticles = this.state.allArticles;
		if ( sortOption === 'all' ) {
			this.setState({displayArticles});
		} else {
			displayArticles = displayArticles.filter((a) => {
				return a.section === sortOption;
			})
			displayArticles = displayArticles.sort(this.articlesDateSort);
			this.setState({displayArticles})
		}
	}

	render() {
		return (
			<div className="articles-container">
				<MenuComponent articles={this.state.displayArticles}
					selectHandler={this.onArticleSelect}
					sectionHandler={this.onSectionSort}
			/>
				<ReaderComponent article={this.state.currentArticle} />
			</div>
		);
	}

}

export default ArticlesComponent;
