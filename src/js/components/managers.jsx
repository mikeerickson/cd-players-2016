/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

import React, {Component} from 'react'
import request            from 'superagent'
import SimpleTable        from 'react-simple-table'
import AppUtilsEx         from '../AppUtilsEx'
import AppUtils           from '../AppUtils'

export default class Managers extends Component {


	/*
	 {
	 "_id": {
	 "$oid": "551cc1501a45fa54e97af5bf"
	 },
	 "playerID": "gibbojo02",
	 "yearID": 2014,
	 "teamID": "TOR",
	 "lgID": "AL",
	 "first_name": "John",
	 "last_name": "Gibbons",
	 "G": 162,
	 "W": 83,
	 "L": 79,
	 "rank": 3
	 },
	 */
	static propTypes    = {}
	static defaultProps = {}

	constructor(props) {

		// console.log(AppUtils.formatAverage(1,2));
		super(props)
		this.state = {
			managerHeaders: ['Player ID','Team ID','lgID','First Name','Last Name', 'G', 'W', 'L', 'PCT','rank'],
			managerList: []
		}
		let inst = new AppUtils();
	}

	componentWillMount() {
		this.getManagerList()
	}

	componentDidMount() {
	}

	getDivision(divID) {
		switch(divID) {
			case 'E':
				return 'East'
			case 'W':
				return 'West'
			case 'C':
				return 'Central'
		}
	}

	getManagerList() {
		return (
			request
				.get('http://localhost:3000/managers')
				.set('X-API-Key', 'abc-123')
				.set('Accept', 'application/json')
				.end(function(err,res) {
					let managerList = res.body.map(function(row){
						return {
							'Player ID': row.playerID,
							'Team ID': row.teamID,
							'lgID': row.lgID,
							'First Name': row.first_name,
							'Last Name': row.last_name,
							G: row.G,
							W: row.W,
							L: row.L,
							PCT: AppUtilsEx.formatAverage(row.W, (row.W + row.L)),
							rank: row.rank
						}
					}.bind(this))

					if ( err ) { console.log('error', err); return err; }
					this.setState({managerList: managerList})
				}.bind(this))
		)
	}

	render() {
		return (
			<div>
				<SimpleTable className="table table-bordered table-striped" columns={this.state.managerHeaders} data={this.state.managerList} />
			</div>
		)
	}
}
