const command = require('../../src/commands/report-command');

describe('Report Command', function () {
	it('should run the correct action', function () {
		const spyObj = {
			report() {},
		};
		const spy = jest.spyOn(spyObj, 'report');
		const cmd = new command(spyObj, null);
		cmd.run();

		expect(spy).toHaveBeenCalled();
	});
});
