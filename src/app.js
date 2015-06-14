import React from 'react';
import CustomFrame from './frame';

'use strict';

class HelloWorld extends React.Component {
	render() {
		return <div>
			<blockquote>Hello ES6 world - built w/ Grunt!!!</blockquote>
			<cite>sourcemaps added</cite>
			<div>
				<a href='http://www.wix.com'>I am an ES6 created DIVider, go to Wix.com</a>
			</div>
			<CustomFrame source="http://www.wix.com"/>
		</div>
	}
}

export default HelloWorld;