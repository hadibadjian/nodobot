const adapter = require('../../src/adapters/input-adapter');

describe('Input Adapter', function () {
	it('should not be used directly', function () {
		const adp = new adapter('');

		expect(() => {
			adp.commands();
		}).toThrow();
	});
});
