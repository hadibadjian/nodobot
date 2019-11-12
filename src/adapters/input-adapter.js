class InputAdapter {
	constructor(source) {
		this.source = source;
	}

	commands() {
		throw Error('Cannot instantiate the abstract class InputAdapter');
	}
}

module.exports = InputAdapter;
