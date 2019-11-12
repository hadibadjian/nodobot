class Command {
	constructor(car, args) {
		this.car = car;
		this.args = args;
	}

	run() {
		throw Error('Top level command cannot run. Use sub-commands instead.')
	}
}
module.exports = Command;
