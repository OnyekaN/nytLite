import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesComponent from './controllers/articles.component';

const title = 'NYT Lite';

ReactDOM.render(
	<ArticlesComponent />,
	document.getElementsByClassName('main-container')[0]
);
