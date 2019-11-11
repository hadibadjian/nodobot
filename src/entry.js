const fs = require('fs');
const botCar = require('./car');

class Entry {
	constructor(inputFilePath) {
		this.inputContent = fs.readFileSync(inputFilePath, 'utf8');
		this.car = new botCar(5);
	}

	commands() {
		return this.inputContent.trim().split('\n').map(command => this._parse(command));
	}

	run() {
		let report = null;
		this.commands().forEach(item => {
			switch (item.command) {
				case 'PLACE':
					this.car.place(...item.args);
					return;
				case 'MOVE':
					this.car.move();
					return;
				case 'LEFT':
					this.car.left();
					return;
				case 'RIGHT':
					this.car.right();
					return;
				case 'REPORT':
					report = this.car.report();
					return;
			}
		});
		return report;
	}

	// Private Methods

	_parse(rawCommand) {
		let found = rawCommand.match(/PLACE\s*(\d)\s*,\s*(\d)\s*,\s*(NORTH|SOUTH|EAST|WEST)/);
		if (found) {
			return {command: 'PLACE', args: [+found[1], +found[2], found[3]]}
		}

		switch (rawCommand) {
			case 'MOVE':
				return {command: 'MOVE', args: []};
			case 'LEFT':
				return {command: 'LEFT', args: []};
			case 'RIGHT':
				return {command: 'RIGHT', args: []};
			case 'REPORT':
				return {command: 'REPORT', args: []};
		}
	}
}

module.exports = Entry;
