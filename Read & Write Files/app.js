var fs = require('fs')

// File Reader
const getData = fs.readFileSync('readMe.json', 'utf8')
const toJson = JSON.parse(getData)
let getTitle = []
toJson.forEach(element => {
	getTitle.push(element.title)
	// console.log(element.title)
})

// Writer File
var writeFiles = fs.writeFileSync('writeMe.txt', JSON.stringify(getTitle))
try {
	if (!writeFiles) {
		console.log('Title has been pulled!')
	} else {
		console.log('Failure to write file')
	}
} catch (error) {
	console.log('Mistake Operation', error.message)
}

// console.log(toJson)
