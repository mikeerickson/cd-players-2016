/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

import React, {Component} from 'react'
import ReactDOM           from 'react-dom'
import Teams              from './components/Teams.jsx'
import Managers           from './components/Managers.jsx'
import BasicTable         from './components/BasicTable.jsx'

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
				<h2>Managers</h2>
				<Managers />
				<h2>Basic Bootstrap Table</h2>
				<BasicTable />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#app'))
