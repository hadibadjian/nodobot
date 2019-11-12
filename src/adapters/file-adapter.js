const inputAdapter = require('./input-adapter');
const fs = require('fs');

class FileAdapter extends inputAdapter {
	commands() {
		const fileContent = fs.readFileSync(this.source, 'utf8');
		return fileContent
			.trim()
			.split('\n');
	}
}

module.exports = FileAdapter;
