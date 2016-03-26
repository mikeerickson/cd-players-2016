import React, {Component} from 'react'
import ReactDOM           from 'react-dom'

export default class App extends Component {
	
	static propTypes    = {}
	static defaultProps = {}

	constructor(props) {
		super(props)
		
		this.state = {}
	}r
	r
	
	render() {
		return (
			<div>
				<h1>Hello World from React</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#app'))
