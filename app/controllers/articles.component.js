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
		}

	}

	componentDidMount() {

		let articles = [];
		Object.keys(articlesJSON).forEach((key) => {
			if ( articlesJSON[key].title.indexOf('Page Not Found') == -1 ) {
				articles.push(articlesJSON[key]);
			}
		});

		this.setState({
			allArticles: articles,
		});

	}

	render() {
		return (
			<div className="articles-container">
				<MenuComponent />
				<div>
					{this.state.allArticles.map((obj, i) => { return (
						<div key={i}>
							<h3>{obj.title}</h3>
							<p>nytimes.com{obj.href}</p>
						</div>
					)})}
				</div>
			</div>
		);
	}

}

export default ArticlesComponent;
