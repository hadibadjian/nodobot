const command = require('./command');

class ReportCommand extends command {
	run() {
		return this.car.report();
	}
}

module.exports = ReportCommand;
