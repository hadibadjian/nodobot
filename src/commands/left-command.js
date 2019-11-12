const command = require('./command');

class LeftCommand extends command {
	run() {
		return this.car.left();
	}
}

module.exports = LeftCommand;
