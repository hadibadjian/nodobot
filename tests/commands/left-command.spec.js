const command = require('../../src/commands/left-command');

describe('Left Command', function () {
	it('should run the correct action', function () {
		const spyObj = {
			left() {},
		};
		const spy = jest.spyOn(spyObj, 'left');
		const cmd = new command(spyObj, null);
		cmd.run();

		expect(spy).toHaveBeenCalled();
	});
});
