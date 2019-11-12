const command = require('../../src/commands/right-command');

describe('Right Command', function () {
	it('should run the correct action', function () {
		const spyObj = {
			right() {},
		};
		const spy = jest.spyOn(spyObj, 'right');
		const cmd = new command(spyObj, null);
		cmd.run();

		expect(spy).toHaveBeenCalled();
	});
});
