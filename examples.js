var x = 0;

while (x < 10) {
	console.log(x);
	x = x + 1;
}

function func1() {
	console.log('func 1');
	func2();
	console.log('func 1 continues');
	return;
}

function func2() {
	console.log('func 2');
	func3();
	console.log('func 2 continues');
	return;
}

function func3() {
	console.log('func 3');
	return;
}

func1();
// ?????

function func(x) {
	if (x === 0) {
		console.log(0);
		return;
	}
	console.log(x);
	func(x - 1);
	console.log(x);
}

func(5);
console.log('done!');

/*
func(5)
  func(4)
    func(3)
      func(2)
        func(1)
          func(0)
*/
//____________________________________________________________________

var addUntilTen = function(num) {
	if (num >= 10) {
		// base case
		console.log('done!');
	} else {
		// recursive case
		console.log(`num is ${num} keep going!`);
		addUntilTen(num + 1);
		console.log(`back where num is ${num}`);
	}
};

addUntilTen(4);

// function expression

var isGreaterThan100 = function(number) {
	if (number > 100) {
		// do one thing
		console.log('your number is greater than 100');
	} else {
		// do another thing
		console.log('your number is less than 100');
	}
};

// function declaration

function isGreaterThan100Again(number) {
	if (number > 100) {
		console.log('greater than 100');
	} else {
		console.log('less than 100');
	}
}

isGreaterThan100(150);
isGreaterThan100Again(50);

function outer() {
	console.log("I'm the start of the outer function");
	middle();
	console.log("I'm the end of the outer function");
}

function middle() {
	console.log("I'm the start of the middle function");
	inner();
	console.log("I'm the end of the middle function");
}

function inner() {
	console.log("I'm the inner function");
}

outer();

function sumTo10(number, sum = 0) {
	// base case
	if (number >= 10) {
		return sum + number;
	} else {
		// recursive case
		// console.log('curent sum:', sum)
		sum = sum + number;
		return sumTo10(number + 1, sum);
	}
}

// console.log('final output:', sumTo10(1, 0))

// console.log('math equation:', 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)

// var myArray = ['hello', 'there', 'my']
// var value = myArray.shift()

// console.log(value)
// console.log(myArray)

// [[3], [4]]

// [3, [4]]

// [1].concat([2, 3, 4])
