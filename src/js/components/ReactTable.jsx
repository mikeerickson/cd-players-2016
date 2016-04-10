/* eslint max-len: 0 */
/* eslint jsx-quotes: 0 */
import React, {Component}                    from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
	const startId = products.length;
	for (let i = 0; i < quantity; i++) {
		const id = startId + i;
		products.push({
			id: id,
			name: 'Item name ' + id,
			price: 2100 + i
		});
	}
	return products;
}

let data = addProducts(2);
console.log('data', data);
export default class BasicTable extends Component {
	constructor(props) {
		console.log(props);
		super(props)
	}

	render() {
			return (
			<div>
				<h1>Oh So Pretty, So Very Pretty</h1>
				<BootstrapTable data={ products }>
					<TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
					<TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
					<TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
				</BootstrapTable>
			</div>
			);
	}
}
