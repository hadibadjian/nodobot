const command = require('../../src/commands/place-command');

describe('Place Command', function () {
	it('should run the correct action', function () {
		const spyObj = {
			place(x, y, direction) { return [x, y, direction] },
		};
		const spy = jest.spyOn(spyObj, 'place');
		const cmd = new command(spyObj, [0, 1, 'SOUTH']);
		const args = cmd.run();

		expect(spy).toHaveBeenCalled();
		expect(args).toEqual([0, 1, 'SOUTH'])
	});
});
