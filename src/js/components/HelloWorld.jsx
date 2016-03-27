import React, {Component} from 'react'

class HelloWorld extends Component {

	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<h2>Hello `{this.props.name}` Family From Component</h2>
			</div>
		)
	}
}

export default HelloWorld;
