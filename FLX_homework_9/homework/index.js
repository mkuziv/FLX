// task1
function findTypes() {
	let types = [];
	for (var i = 0; i < arguments.length; i++) {
		types.push(typeof arguments[i]);
	}
	return types;
}
findTypes("number");

//task2
function executeforEach(arr, fun) {
	for (let i = 0; i < arr.length; i++) {
		fun(arr[i]);
	}
}
executeforEach([1, 2, 3,], function (el) {
	console.log(el)
});

// task3
function mapArray(arr, func) {
	let resultArray = [];
	executeforEach(arr, function (item) {
		resultArray.push(func(item));
	})
	return resultArray;
}
mapArray([2, 5, 8], function (el) {
	return el + 3
})

//task4
function filterArray(arr, fun) {
	let resultArray = [];
	executeforEach(arr, function (item) {
		if (fun(item)) {
			resultArray.push(item);
		}
	})
	return resultArray;
}
filterArray([2, 5, 8], function (el) {
	return el > 3;
})

//task5
let data = [
	{
		"_id": "5b5e3168c6bf40f2c1235cd6",
		"index": 0,
		"age": 39,
		"eyeColor": "green",
		"name": "Stein",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e3168e328c0d72e4f27d8",
		"index": 1,
		"age": 38,
		"eyeColor": "blue",
		"name": "Cortez",
		"favoriteFruit": "strawberry"
	},
	{
		"_id": "5b5e3168cc79132b631c666a",
		"index": 2,
		"age": 2,
		"eyeColor": "blue",
		"name": "Suzette",
		"favoriteFruit": "apple"
	},
	{
		"_id": "5b5e31682093adcc6cd0dde5",
		"index": 3,
		"age": 19,
		"eyeColor": "green",
		"name": "George",
		"favoriteFruit": "banana"
	}
];

function getAmountOfAdultPeople(data) {
	let counter = 0
	filterArray(data, function (el) {
		if (el.age > 18) {
			counter++
		}
	})
	return counter;
}
console.log(getAmountOfAdultPeople(data));

//task6
function getGreenAdultBananaLovers(data) {
	let result = filterArray(data, function (el) {
		if (el.age > 18 && el.favoriteFruit === "banana" && el.eyeColor === "green") {
			return true;
		}
	})

	return mapArray(result, item => {
		return item.name;
	}).join("");

}
console.log(getGreenAdultBananaLovers(data));

//task7
function keys(obj) {
	let arr = [];
	for (let prop in obj) {
		arr.push(prop);
	}
	return arr;
}
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });

//task8
function values(obj) {
	let arr = [];
	for (let prop in obj) {
		arr.push(obj[prop]);
	}
	return arr;
}
values({ keyOne: 1, keyTwo: 2, keyThree: 3 });

//task9
function showFormattedDate() {
	let d = arguments[0];
	console.log("Date: " + d.getDate() + " of " + d.toLocaleString('en-US', { month: 'short' }) + ", " 
	+ d.getFullYear());
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

//task10
function isEvenYear() {
	let d = arguments[0];
	if (d.getFullYear() % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
isEvenYear(new Date('2019-01-27T01:10:00'));

//task11
function isEvenMonth() {
	let d = arguments[0];
	if (d.getMonth() % 2 === 0) {
		return false;
	} else {
		return true;
	}
}
isEvenMonth(new Date('2019-03-27T01:10:00'));