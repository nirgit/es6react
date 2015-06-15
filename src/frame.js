import React from 'react';

'use strict';

class CustomFrame extends React.Component {
	consructor() {
		this.displayName = 'CustomFrame';
	}
		
	render() {
		let wrapperStyle = {
			'border-width': 10,
			'border-color': 'aliceblue',
			'border-style': 'solid',
			'padding': 5,
			'position': 'relative',
			'width': 500,
			'height': 400
		}

		let frameStyle = {
			height: '100%',
			width: '100%'
		};

		return <div style={wrapperStyle}>
			<iframe src={this.props.source} style={frameStyle}></iframe>
		</div>
	}
}


export default CustomFrame;