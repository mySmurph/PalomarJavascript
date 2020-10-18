function $ (id){ return document.getElementById(id);};
window.onload = function (){
	$("changecolor").onclick = changeColor;
};
changeColor = function (){
	var myPara = $("mypara");
	myPara.style.color = "blue";
	var myParent = myPara.parentNode;
	var myParantNN = myParent.nodeName;
	var nodeList = document.getElementsByTagName(myParantNN);
	for (var i = 0; i < nodeList.length; i++){
	nodeList[i].style.backgroundColor = "yellow";};
};