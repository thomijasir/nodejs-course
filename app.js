const express = require('express')
const app = express()

app.set('view engine', 'ejs')

// Express Part 1 SImple routing
app.get('/', (req, res) => {
	res.send('this is the home page')
})

app.get('/contact', (req, res) => {
	res.send('this is contact page')
})

// Express Part 2 Routing with slugs dynamic
app.get('/slug/:id', (req, res) => {
	res.send('You request to see profile ' + req.params.id)
})

// Express tutorial Slug dynamic + past data to the view
app.get('/profile/:id', (req, res) => {
	const people = {
		person: req.params.id,
		name: 'Thomi Jasir Run',
		email: 'thomijasir@gmail.com',
	}
	res.render('profile', { data: people })
})

// Express Routing Advance Query String
app.get('/query', (req, res) => {
	// sample localhost:3000/query?name=thomi&nim=6706151124
	res.send(req.query)
})

app.get('/postmethod', (req, res) => {
	res.render('postmethod')
})

app.listen(3000)
