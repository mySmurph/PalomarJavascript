var $ =		function (id)
{
return document.getElementById(id);
};

function processInfo()
{
	var num1=		$("firstnum").value;
	var num2=		$("secondnum").value;
	var Total=		$("total");
	
	var msgTotal =	addNumber(num1, num2);
	Total.firstChild.nodeValue =	msgTotal;
};

var addNumber =		function (num1, num2)
{
	var total =		parseFloat(num1) + parseFloat(num2);
	total =			"Total: "+ total;
	return total;
};