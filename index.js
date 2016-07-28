var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();

var native = Object.getOwnPropertyDescriptors;
require("ecma-proposal-object.getownpropertydescriptors");
var polyfill = Object.getOwnPropertyDescriptors;

var simpleObject = Object.defineProperties({
  get [Symbol.toStringTag]() { return "Simple" },
  "beta": 4938,
  14: { name: "Test" },
  17: { name: "Failure" },
  31: "Alpha Centauri",
  "alpha": "one",
}, {
	last: { configurable: false, enumerable: false, value: "Silver" },
	[Symbol.toPrimitive]: { configurable: false, enumerable: false,
		                    get() { return this.valueOf; } },
    "-4961": { value: true, configurable: false, enumerable: false }
});

if (typeof native === "function") {
	suite.
		add("Object.getOwnPropertyDescriptors native", function() {
			return native(simpleObject);
		});
}

suite.
	add("Object.getOwnPropertyDescriptors polyfill", function() {
		return polyfill(simpleObject);
	});

suite.
	on("error", function() {
		console.error([...arguments]);
	}).
	on("cycle", function(event) {
		var bench = event.target;
		console.log([
			"===============================================================",
			"name: " + bench.name,
			"hz: " + bench.hz,
			""
		].join("\n"));
	});

suite.run();
