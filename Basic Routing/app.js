const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	console.log('Request was made: ' + req.url)

	// Basic Routin Using Request URL

	if (req.url === '/' || req.url === '/home') {
		res.writeHead(200, {
			'Content-Type': 'text/html',
		})
		const streamRead = fs.createReadStream(__dirname + '/index.html', 'utf8')
		streamRead.pipe(res)
	} else {
		res.writeHead(200, {
			'Content-Type': 'application/json',
		})
		const getData = {
			name: 'Thomi Jasir',
			nim: '6706151224',
			smester: '6Th',
		}
		res.end(JSON.stringify(getData))
	}
})

server.listen(3000, '127.0.0.1')
console.log('Server is running: http://localhost:3000')
