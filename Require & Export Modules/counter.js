var counter = arr => {
	return `There are ${arr.length} Elements in array`
}

var sayhi = () => {
	return 'Hello Kampret'
}

var deff = () => {
	return 'Default Message'
}

var PI = 3.14

// Basic Method
// module.exports = deff
// module.exports.ctn = counter
// module.exports.his = sayhi
// module.exports.pi = PI

// Props Method
module.exports = {
	counter: deff,
	ctn: counter,
	his: sayhi,
	pi: PI,
}
