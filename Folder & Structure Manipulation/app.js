var fs = require('fs')

deleteFiles = filename => {
	const isDelted = fs.unlink(filename)
	if (isDelted) {
		return true
	} else {
		false
	}
}

deleteDir = dirname => {
	const isDelted = fs.rmdirSync(dirname)
	if (isDelted) {
		return true
	} else {
		false
	}
}

// Sample Create Directory and Write Files

fs.mkdir('stuff', () => {
	fs.readdirSync('readMe.json', (err, data) => {
		fs.writeFileSync('./stuff/writeFile.txt', data)
	})
})
