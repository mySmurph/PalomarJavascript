function processInfo()
{
var firstnameElement = document.getElementById("firstname");
	firstname = firstnameElement.value;
var lastnameElement = document.getElementById("lastname");
	lastname = lastnameElement.value;
var numpetsElement = document.getElementById("numpets");
	numpets = numpetsElement.value;
var pet1Element = document.getElementById("pet1");
	pet1 = pet1Element.value;
var pet2Element = document.getElementById("pet2");
	pet2 = pet2Element.value;
var pet3Element = document.getElementById("pet3");
	pet3 = pet3Element.value;
var petX = " ";
var	petMsg = " ";	
var	myMsg = document.getElementById("message");

var	firstError = document.getElementById("firstname_error");
var	lastError = document.getElementById("lastname_error");
var	petError = document.getElementById("numpets_error");
var okay = "*";



var	date = new Date();
var	today = (date.getMonth()+1) + "-" + date.getDate() + "-" + date.getFullYear();


//	area left blank -- error //
	if (firstname == "")
	{
	firstError.firstChild.nodeValue= "Please enter First Name";
	}
	else	{
	firstError.firstChild.nodeValue= okay;};
	if (lastname == "")
	{
	lastError.firstChild.nodeValue= "Please enter Last Name";
	}
	else	{
	lastError.firstChild.nodeValue= okay;};
	if (numpets == "")
	{
	petError.firstChild.nodeValue= "Please enter number of Pets";
	}
	else	{
	petError.firstChild.nodeValue= okay;};
	
for (counter=1;counter<=numpets;counter++)

	{
		petX = 'pet'+counter;
		petName = document.getElementById(petX).value;
		petMsg += "Your Pet#"+counter +" is named "+ petName +". ";
	
	};
	myMsg.firstChild.nodeValue= "Your name is listed as " + lastname + ", " + firstname + " and today's date is " + today +". " + petMsg;



};