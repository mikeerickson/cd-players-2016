import React, {Component} from 'react'

class HelloWorld extends Component {

	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<h3>Hello `{this.props.name}` Family From Component</h3>
			</div>
		)
	}
}

export default HelloWorld;
