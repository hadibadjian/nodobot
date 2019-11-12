const fileAdapter = require('../../src/adapters/file-adapter');
const path = require('path');

describe('File Adapter', function () {
	it('parses the commands', function () {
		const inputPath = path.resolve(__dirname, '../fixtures/example1.txt');
		const adapter = new fileAdapter(inputPath);

		expect(adapter.commands()).toEqual(['PLACE 0,0,NORTH', 'MOVE', 'LEFT', 'RIGHT', 'REPORT']);
	});
});
