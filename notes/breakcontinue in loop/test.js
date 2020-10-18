var myList = " ";
var userResponce= "";
do
{
	userResponce=	prompt("add item to list", " ");
	myList += userResponce + "\n";
	if (userResponce == "fish")
	{
		alert("Fish are friends not food");
		continue;
	}
}
while	(userResponce !='done')
alert	("my list is\n " + myList);
//done is in list