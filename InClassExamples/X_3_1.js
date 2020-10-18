function processInfo()
{
var firstName = document.getElementById("first_name");
	firstName = firstName.value;
var ynchildren = document.getElementById("yn_children").value;
	ynchildren = ynchildren.toLowerCase().substr(0, 1);
var age = document.getElementById("old_age");
	age = age.value;
var MM= new Date().getMonth()+1;
var DD= new Date().getDate();
var myMsg = document.getElementById("MyMSG");

	if (ynchildren != 'y')	
	{ 
		myMsg.firstChild.nodeValue= "It must be  peaceful at home, "+ firstName + " on this date of " + MM+"/"+ DD;
	}
	else if ( age<=19)
	{
		myMsg.firstChild.nodeValue= "You still have kids at home";
	}
	else
	{
		myMsg.firstChild.nodeValue= "Hopefully they have moved out of the house";
	}
}