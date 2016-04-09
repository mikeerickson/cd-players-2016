/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

import React, {Component} from 'react'
import ReactDOM           from 'react-dom'
import Teams              from './components/Teams.jsx'
import Managers           from './components/Managers.jsx'

export default class App extends Component {

	static propTypes    = {}
	static defaultProps = {}

	constructor(props) {
		super(props)

		this.state = {
			fname: 'Mike',
			lname: 'Erickson',
			email: 'mike.erickson@mac.com'
		}

	}

	render() {
		return (
			<div>
				<h1>Managers 2016</h1>
				<Managers />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#app'))
