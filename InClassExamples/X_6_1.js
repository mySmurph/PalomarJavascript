function $ (id){
	return document.getElementById(id);
};
window.onload = function (){
	$("showbutton").onclick = evalProperties;
};
evalProperties = function (){
	var propertiesMSG = $("messagearea");
	var myPara = $("mypara");
	var mpO = myPara;
	var mpNN = myPara.nodeName;
	var mpNT = myPara.nodeType;
	propertiesMSG.innerHTML =
	"Element is: " + mpO + "<br>"+
	"Element NodeNamer is: " + mpNN + "<br>" +
	"Element NodeType is: " + mpNT;
};