function $(id){
	return document.getElementById(id);
};
window.onload = function(){
	$("processInfo").onclick = processInfo;
};
function processInfo(){
	var myItems = [];
		myItems[0] = "rent";
		myItems[1] = "food";
		myItems[2] = "sdge";
		myItems[3] = "car";
	var myAmounts = [];
		myAmounts[0] = 1000;
		myAmounts[1] = 150;
		myAmounts[2] = 175;
	var TAI = $("tai");
	var TAImsg = addNumbers(myItems, myAmounts);
	TAI.firstChild.nodeValue = TAImsg
};
function addNumbers(item, amount){
	return 0+item.length + amount.length
};
