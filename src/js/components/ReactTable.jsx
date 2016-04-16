/* eslint max-len: 0 */
/* eslint jsx-quotes: 0 */

import React, {Component}                    from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class ReactTable extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log('headers', this.props.headers)
			return (
				<div>
					<BootstrapTable striped={true} hover={true} condensed={true} data={ this.props.data }>
						<TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
						<TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
						<TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
					</BootstrapTable>
				</div>
			);
	}
}
