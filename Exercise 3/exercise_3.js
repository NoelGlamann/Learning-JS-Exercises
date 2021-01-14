/*Noel Glamann
January 14, 2021 */

fullName = {
	first: "Joe", 
	last: "Smith", 
	print(){
		msg = 'Hello, ' + this.first + ' ' + this.last + '\n';
		msg+= 'Let me shout it! \n';
		msg+= this.first.toUpperCase() + ' ' + this.last.toUpperCase()
		alert(msg)
	}

}

let inputFName = prompt('Enter your first name: ')

if (inputFName.length == 0) {
	('No name entered. Using Default: ');
	alert('No name entered. Using Default: ' + fullName.first);
}
else {
	fullName.first = inputFName;
}

let inputLName = prompt('Enter your last name: ')

if (inputLName.length == 0) {
	msg = ('No name entered. Using Default:' + fullName.last);
	alert(msg);
}
else {
	fullName.last = inputLName;
}


fullName.print()
