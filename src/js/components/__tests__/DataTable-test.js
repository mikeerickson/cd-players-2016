
/* eslint no-undef:0*/

jest.unmock('../DataTable'); // unmock to use the actual implementation of sum

import React      from 'react'
import ReactDOM   from 'react-dom'
import TestUtils  from 'react-addons-test-utils'
import DataTable  from '../DataTable';

describe('HelloWorld `jest` testing', () => {

	it('adds should pass', () => {
		expect(true).toBe(true);
	});

	it('confirms DataTable component is mounted', () => {
		const dataTable = TestUtils.renderIntoDocument(
			<DataTable />
		);

		const dataTableNode = ReactDOM.findDOMNode(dataTable);

		expect(dataTableNode.textContent).toContain('Data');
		expect(dataTableNode.textContent).toEqual('Hello From Data Table');
		
	});

});
