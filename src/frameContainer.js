import React from 'react';

'use strict';

class FrameContainer extends React.Component {
	render() {
		let containerStyle = {
			height: '100%',
			width: '100%',
			position: 'relative',
			padding: '5px 0',
			border: '1px solid'
		};
		return <div style={containerStyle}>
			{this.props.children}
		</div>
	}
}

export default FrameContainer;
