const botEntry = require('../src/entry');
const path = require('path');

describe('Entry', function () {
	it('parses the input file', function () {
		const inputPath = path.resolve(__dirname, 'fixtures/example1.txt');
		const entry = new botEntry(inputPath);

		expect(entry.commands()).toEqual([
			{command: 'PLACE', args: [0, 0, 'NORTH']},
			{command: 'MOVE', args: []},
			{command: 'LEFT', args: []},
			{command: 'RIGHT', args: []},
			{command: 'REPORT', args: []},
		])
	});

	[
		['example1', [0, 1, 'NORTH']],
		['example2', [0, 0, 'WEST']],
		['example3', [3, 3, 'NORTH']]
	].forEach(example => {
		it(`runs ${example[0]}`, function () {
			const inputPath = path.resolve(__dirname, `fixtures/${example[0]}.txt`);
			const entry = new botEntry(inputPath);

			expect(entry.run()).toEqual(example[1]);
		});
	});
});
