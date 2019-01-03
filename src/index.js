import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';

const App = () => {
	return <div className="hello">hello react!</div>;
}

ReactDom.render(<App/>, document.getElementById('app'));
