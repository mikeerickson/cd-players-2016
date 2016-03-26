
/*global describe*/
/*global it*/

import chai from 'chai';

let expect = chai.expect;
let should = chai.should();

describe('Spec Heartbeat (verify configuration)', () => {

	it('should pass and use expect', (done) => {
		expect(true).to.be.true
		done()
	})

	it('should pass and use should', (done) => {
		let name = 'mike'
		name.should.equal('mike')
		done()
	})

})
