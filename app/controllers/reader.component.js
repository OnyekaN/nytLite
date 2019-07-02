'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ReaderComponent extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			markup: ''
		}
		this.createMarkup = this.createMarkup.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if ( !!Object.keys(nextProps.article).length ) {
			let href = nextProps.article.href.split('/');
			href = 'articles/' + href[href.length - 1];
			this.createMarkup(href);
		}
	}

	createMarkup(href) {
		let html = '';
		axios.get(href)
			.then(res => {
				html = res.data;
				this.setState({markup: html});
			});
	}


	render() {
		return (
			<div className="reader-container">
				<div dangerouslySetInnerHTML={{__html: this.state.markup}} />
			</div>
		)
	}

}

export default ReaderComponent;
