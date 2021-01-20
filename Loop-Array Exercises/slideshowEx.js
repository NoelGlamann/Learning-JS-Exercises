//Noel Glamann
//January 20, 2021

//LOOPS PRACTICE
var ex = 0;

while (ex < 5) {
	console.log(ex);
	ex =  ex +1
}

for (var x = 0; x <7; x = x+1) {
	console.log(x)
}

for (var now = 100; now < 200; now += 15) {
	console.log('Testing ' + now);
	if (now % 7 ==0) {
		console.log('Found it! ' + now);
		break;
	}
}

//ARRAY PRACTICE
var exampleArray = [1, 2, 3, 4, 5, 9];
const secondExample = new Array('noel', 'grace', 'glamann');
console.log(exampleArray);
console.log(secondExample);
console.log(secondExample[1]);

let myDay = ['wake', 'school', 'eat']
console.log(myDay);
myDay.push('work');
console.log(myDay);
myDay.unshift('sleep');
console.log(myDay);
myDay[2] = 'shower';
console.log(myDay);


/*
CONSOLE RESULTS:

0
1
2
3
4

0
1
2
3
4
5
6

Testing 100
Testing 115
Testing 130
Testing 145
Testing 160
Testing 175
Found it! 175

-------------------------------------

(6) [1, 2, 3, 4, 5, 9]
(3) ["noel", "grace", "glamann"]
grace

(3) ["wake", "school", "eat"]
(4) ["wake", "school", "eat", "work"]
(5) ["sleep", "wake", "school", "eat", "work"]
(5) ["sleep", "wake", "shower", "eat", "work"]

*/






