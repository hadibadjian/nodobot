const command = require('../../src/commands/move-command');

describe('Move Command', function () {
	it('should run the correct action', function () {
		const spyObj = {
			move() {},
		};
		const spy = jest.spyOn(spyObj, 'move');
		const cmd = new command(spyObj, null);
		cmd.run();

		expect(spy).toHaveBeenCalled();
	});
});
