import React from 'react';

'use strict';

class CustomFrame extends React.Component {
	render() {
		let wrapperStyle = {
			'border-width': 10,
			'border-color': 'aliceblue',
			'border-style': 'solid'
		}

		let frameStyle = {
			height: 500,
			width: '100%'
		};

		return <div style={wrapperStyle}>
			<iframe src={this.props.source} style={frameStyle}></iframe>
		</div>
	}
}


export default CustomFrame;