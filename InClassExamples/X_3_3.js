var $ = function (id)
{
	return document.getElementById(id);
	};

window.onload = function ()
{
	$("addbutton").onclick = processInfo;
};

var processInfo = function ()
{
	var num1 = $("number1").value;
	var num2 = $("number2").value;
	var num3 = $("number3").value;
	var total = $("total");
	var msgTotal = "";
		
	var addnum = 0;

	for (cntr=1; cntr<=3; cntr++)
	{
		var numX = 'number' + cntr;
		var numValue = $(numX).value;
		numValue = parseFloat(numValue);
		addnum += numValue;
	}

msgTotal = "Total: " + addnum;

total.firstChild.nodeValue = msgTotal;

};