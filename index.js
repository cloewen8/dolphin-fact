var fs = require('fs');

function getLang() {
	var env = process.env;
	return (env.LC_ALL || env.LC_MESSAGES || env.LC_NAME || env.LANG || env.LANGUAGE || 'en').match(/^[a-z]+/);
}

function readFact(err, data) {
	if (!err) {
		var facts = data.split('\n');
		console.log(`Fact: ${facts[Math.floor(Math.random()*facts.length)]}`);
	} else
		console.error('Unable to load dolphin fact. Please try again!');
}

module.exports = function() {
	try {
		readFact(null, fs.readFileSync(`langs/${getLang()}.txt`, 'utf8'));
	} catch {
		fs.readFile('langs/en.txt', 'utf8', readFact);
	}
}
