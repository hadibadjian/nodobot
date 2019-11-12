const botEntry = require('../src/entry');
const path = require('path');
const fileAdapter = require('../src/adapters/file-adapter');

describe('Entry', function () {
	[
		['example1', [[0, 1, 'NORTH']]],
		['example2', [[0, 0, 'WEST']]],
		['example3', [[3, 3, 'NORTH']]],
		['example4', [[3, 3, 'NORTH'], [4, 4, 'EAST']]],
	].forEach(example => {
		it(`runs ${example[0]}`, function () {
			const inputPath = path.resolve(__dirname, `fixtures/${example[0]}.txt`);
			const adapter = new fileAdapter(inputPath);
			const entry = new botEntry(adapter);

			expect(entry.run()).toEqual(example[1]);
		});
	});
});
