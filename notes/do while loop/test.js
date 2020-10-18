var myList = " ";
var userResponce= "";
userResponce=	prompt("add item to list", "");
while	(userResponce !='exit')
{
	myList += userResponce + "\n";
	userResponce=	prompt("add item to list", "");
}

alert	("my list is\n " + myList);
//exit is in list