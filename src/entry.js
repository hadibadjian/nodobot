const botCar = require('./car');
const placeCommand = require('./commands/place-command');
const rightCommand = require('./commands/right-command');
const leftCommand = require('./commands/left-command');
const moveCommand = require('./commands/move-command');
const reportCommand = require('./commands/report-command');

class Entry {
	constructor(inputAdapter) {
		this.inputAdapter = inputAdapter;
		this.car = new botCar(5);
	}

	run() {
		return this._commands()
			.map(item => item.run())
			.filter(result => result);
	}

	// Private Methods

	_commands() {
		return this.inputAdapter
			.commands()
			.map(command => this._parse(command));
	}

	_parse(command) {
		let found = command.match(/PLACE\s*(\d)\s*,\s*(\d)\s*,\s*(NORTH|SOUTH|EAST|WEST)/);
		if (found) {
			return new placeCommand(this.car, [+found[1], +found[2], found[3]]);
		}

		switch (command) {
			case 'MOVE':
				return new moveCommand(this.car, []);
			case 'LEFT':
				return new leftCommand(this.car, []);
			case 'RIGHT':
				return new rightCommand(this.car, []);
			case 'REPORT':
				return new reportCommand(this.car, []);
		}
	}
}

module.exports = Entry;
