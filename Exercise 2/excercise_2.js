/* Noel Glamann
January 7. 2021 */
{
	let name = prompt("Please enter your name.");
	
	let ageString = prompt("Age?");
	let ageNum = parseInt(ageString);
	let yearAge = ++ageNum
	let yearAgeString = yearAge.toString();
	
	let str1="Hello "
	let str2 = ", in one year you will be "
	
	let msg = str1.concat (name, str2, yearAgeString);
	alert(msg);
}
	