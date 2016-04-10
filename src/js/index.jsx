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
			config:  {},
			data:    [],
			headers: [{key: 1, colName: 'colName'}]
		}
	}

	createData(quantity) {

		const startId  = 1000
		const products = []

		for (let i = 0; i < quantity; i++) {
			const id = startId + i;
			products.push({
				id: id,
				name: 'Item name ' + id,
				price: 2100 + i
			});
		}
		return products
	}

	componentWillMount() {
		let products = this.createData(10)
		this.setState({data: products})
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<h2>Basic Bootstrap Table</h2>
				<ReactTable
					config={this.state.config}
					data={this.state.data}
					headers={this.state.headers}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#app'))
