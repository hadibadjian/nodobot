const path = require('path');
const fileAdapter = require('../src/adapters/file-adapter');
const botEntry = require('../src/entry');

const filePath = process.env.npm_config_relPath || 'tests/fixtures/example4.txt';

const inputPath = path.resolve(__dirname, '../' + filePath);
const adapter = new fileAdapter(inputPath);

const entry = new botEntry(adapter);

console.log(adapter.commands().join('\n'));
console.log();
console.log(entry.run().map(result => result.toString()).join('\n'));
