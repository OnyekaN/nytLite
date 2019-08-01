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
		this.onArticleSort = this.onArticleSort.bind(this);

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
				allArticles.sort(this.articlesDateSort);
				this.setState({allArticles});
				this.setState({displayArticles: allArticles});
				this.setState({currentArticle: allArticles[0]});
			});

	}

	onArticleSelect(currentArticle) {
		if ( false ) {
			return
		} else {
			this.setState({ currentArticle });
		}
	}

	articlesSectionsFilter(section) {


	}

	articlesDateSort(a, b) {
		if ( a.date > b.date ) {
			return -1;
		} if ( a.date < b.date ) {
			return 1;
		}
		return 0;
	}

	articlesSectionSort(a, b) {
		if ( a.section < b.section ) {
			return -1;
		} if ( a.section > b.section ) {
			return 1;
		}
		return 0;
	}

	onArticleSort(sortOption) {
		if ( false )
			return
		let displayArticles = this.state.allArticles;
		if ( sortOption === 'all' ) {
			this.setState({displayArticles});
		} else {
			displayArticles = displayArticles.filter((a) => {
				return a.section === sortOption;
			})
			this.setState({displayArticles})
		}
	}

	menuMouseEnter() {
		console.log('enter');
	}

	menuMouseLeave() {
		console.log('leave');
	}

	render() {
		return (
			<div className="articles-container">
				<MenuComponent articles={this.state.displayArticles}
					selectHandler={this.onArticleSelect}
					sortHandler={this.onArticleSort}
					mouseEnterHandler={this.menuMouseEnter}
					mouseLeaveHandler={this.menuMouseLeave}
			/>
				<ReaderComponent article={this.state.currentArticle} />
			</div>
		);
	}

}

export default ArticlesComponent;
