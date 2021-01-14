/* Noel Glamann
January 14, 2021 */

//WHAT NUM BIGGER

function greaterNum(num1, num2) {
	if (num1 > num2) {
		return num1;
	}
	else {
		return num2;
	}
}

console.log(greaterNum(-1, -8));
console.log(greaterNum(103, 698));
	
//WORD TRANSLATOR

function helloWorld(code) {
	if (code == 'es'){
		return ('Hola Mundo!');
	}
	else if (code =='de'){
		return('Hallo Welt!');
	}
	else if (code =='ja'){
		return('Kon\'nichiwa sekai!');
	}
	else{
		return('Default: EN \n Hello World!')
	}
}

console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('ja'));
console.log(helloWorld('en'));

//GRADE ASSIGNER

function assignGrade(num){
	
	if (num >= 90){
		return('A')
	}
	
	else if (90 > num && num >= 80){
		return('B')
	}
	
	else if (80 > num && num  >= 70){
		return('C')
	}
	
	else if (70 > num && num  >= 60){
		return('D')
	}
	
	else if (60 > num){
		return('F')
	}
	
	else {
		return('*Invalid Data Type - Please try again.*')
	}
}

console.log(assignGrade(34));
console.log(assignGrade(90));
console.log(assignGrade(69));
console.log(assignGrade(74));
console.log(assignGrade(81));
console.log(assignGrade('dog'));

//PLURALIZER

function pluralizer(num, word){
	return(num + ' ' + word + 's')
}

console.log(pluralizer(7, 'kitten'));
console.log(pluralizer(18, 'spoon'));