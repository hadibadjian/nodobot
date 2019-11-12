const command = require('./command');

class RightCommand extends command {
	run() {
		return this.car.right();
	}
}

module.exports = RightCommand;
