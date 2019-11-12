const command = require('./command');

class PlaceCommand extends command {
	run() {
		return this.car.place(...this.args);
	}
}

module.exports = PlaceCommand;
