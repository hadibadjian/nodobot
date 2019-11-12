const command = require('../../src/commands/command');

describe('Command', function () {
	it('should not be used directly', function () {
		const cmd = new command(null, null);

		expect(() => {
			cmd.run();
		}).toThrow();
	});
});
