/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

import React, {Component} from 'react'
import ReactDOM           from 'react-dom'
import Teams              from './components/Teams.jsx'
import Managers           from './components/Managers.jsx'
import ReactTable         from './components/ReactTable.jsx'

export default class App extends Component {

	static propTypes    = {}
	static defaultProps = {}

	constructor(props) {
		super(props)

		this.state = {
			config: {
				name: 'Mike'
			}
		}
	}

	render() {
		return (
			<div>
				<h2>Basic Bootstrap Table</h2>
				<ReactTable config={this.state.config} data="" headers=""/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#app'))
