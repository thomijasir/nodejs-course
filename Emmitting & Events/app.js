var events = require('events')
var util = require('util')

var Person = function(name) {
	this.name = name
}

util.inherits(Person, events.EventEmitter)

var james = new Person('james')
var marry = new Person('marry')
var brayn = new Person('brayn')

var people = [james, marry, brayn]

people.forEach(person => {
	person.on('speak', message => {
		console.log(person.name + ' said: ' + message)
	})
})

james.emit('speak', 'hey dudes')
marry.emit('speak', 'i want a curry')

// element.on('click',() => {})

// var myEmmiter = new events.EventEmitter()

// myEmmiter.on('click', message => {
// 	console.log(message)
// })

// myEmmiter.emit('', 'The event was emmited')
