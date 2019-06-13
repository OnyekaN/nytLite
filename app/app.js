import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesComponent from './controllers/articles.component';

const title = 'NYT Lite';

ReactDOM.render(
	<div>{title}</div>,
	document.getElementById('app')
);

ReactDOM.render(
	<ArticlesComponent />,
	document.getElementById('articles')
);
