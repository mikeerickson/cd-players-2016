import React, {Component} from 'react'
import request            from 'superagent'
import SimpleTable        from 'react-simple-table'
import AppUtilsEx         from '../AppUtilsEx'
import AppUtils           from '../AppUtils'

export default class Teams extends Component {

	static propTypes    = {}
	static defaultProps = {}

	constructor(props) {

		// console.log(AppUtils.formatAverage(1,2));
		super(props)
		this.state = {
			teamHeaders: ['Team ID','Team Name','Park','Div ID','G','W','L','PCT','R','AB','H','2B','3B','HR','BB','SO','SB','CS'],
			teamList: []
		}
		let inst = new AppUtils();

		let val = inst.formatAverage(1, 2);
		console.log('val', val);

	}

	componentWillMount() {
		this.getTeamList()
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

	getTeamList() {
		return (
			request
				.get('http://localhost:3000/teams')
				.set('X-API-Key', 'abc-123')
				.set('Accept', 'application/json')
				.end(function(err,res) {
					let teamList = res.body.map(function(row){
						return {
							'Team ID': row.teamID,
							'Team Name': row.name,
							'Park': row.park,
							'Div ID': this.getDivision(row.divID),
							G: row.G,
							W: row.W,
							L: row.L,
							PCT: AppUtilsEx.formatAverage(row.W, 162),
							R: row.R,
							AB: row.AB,
							H: row.H,
							'2B': row['2B'],
							'3B': row['3B'],
							HR: row.HR,
							BB: row.BB,
							SO: row.SO,
							SB: row.SB,
							CS: row.CS,

						}
					}.bind(this))

					if ( err ) { console.log('error', err); return err; }
					this.setState({teamList: teamList})
				}.bind(this))
		)
	}

	render() {
		return (
			<div>
				<SimpleTable className="table table-bordered table-striped" columns={this.state.teamHeaders} data={this.state.teamList} />
			</div>
		)
	}
}

Teams.prototype.getDivision = (divID) => {
	switch (divID) {
		case 'E':
			return 'East'
		case 'W':
			return 'West'
		case 'C':
			return 'Central'
	}
}
