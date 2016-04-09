
import FakeObjectDataListStore from '../helpers/FakeObjectDataListStore.jsx'
import FixedDataTable          from 'fixed-data-table'
import React, {Component}      from 'react'

const {Table, Column, Cell} = FixedDataTable;

const TextCell = ({rowIndex, data, columnKey, ...props}) => (
	<Cell {...props}>
		{data.getObjectAt(rowIndex)[columnKey]}
	</Cell>
);

class DataTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataList: new FakeObjectDataListStore(100),
			columnWidths: {
				firstName: 240,
				lastName: 150,
				sentence: 140,
				companyName: 60,
			},
		};

		this._onColumnResizeEndCallback = this._onColumnResizeEndCallback.bind(this);
	}

	_onColumnResizeEndCallback(newColumnWidth, columnKey) {
		this.setState(({columnWidths}) => ({
			columnWidths: {
				...columnWidths,
				[columnKey]: newColumnWidth,
			}
		}));
	}

	render() {
		var {dataList, columnWidths} = this.state;
		return (
			<div>
				<h1>Hello From Data Table</h1>
				<Table
					rowHeight={30}
					headerHeight={50}
					rowsCount={dataList.getSize()}
					onColumnResizeEndCallback={this._onColumnResizeEndCallback}
					isColumnResizing={false}
					width={1000}
					height={500}
					{...this.props}>
					<Column
						columnKey="firstName"
						header={<Cell>First Name</Cell>}
						cell={<TextCell data={dataList} />}
						fixed={true}
						width={columnWidths.firstName}
						isResizable={true}
					/>
					<Column
						columnKey="lastName"
						header={<Cell>Last Name (min/max constrained)</Cell>}
						cell={<TextCell data={dataList} />}
						width={columnWidths.lastName}
						isResizable={true}
						minWidth={70}
						maxWidth={170}
					/>
					<Column
						columnKey="companyName"
						header={<Cell>Company</Cell>}
						cell={<TextCell data={dataList} />}
						width={columnWidths.companyName}
						isResizable={true}
					/>
					<Column
						columnKey="sentence"
						header={<Cell>Sentence</Cell>}
						cell={<TextCell data={dataList} />}
						width={columnWidths.sentence}
						isResizable={true}
					/>
				</Table>
			</div>
		);
	}
}

export default DataTable
