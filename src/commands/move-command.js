const command = require('./command');

class MoveCommand extends command {
	run() {
		return this.car.move();
	}
}

module.exports = MoveCommand;
