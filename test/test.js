const chai = require('chai'), expect = chai.expect;
chai.should();

describe('Test framework', function () {
    it('should have mocha and chai installed and running', function () {
        expect(true).to.be.true;
    });
});