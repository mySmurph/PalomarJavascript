function $ (id){return document.getElementById(id);
};
window.onload = function (){
	$("showresponse").onclick = show;
	$("removeresponse").onclick = remove;
	$("myresponse").focus();
};
var responce;
show = function (){
	responce = $("myresponse").value
	var responceMSG = document.createTextNode(responce);
	
	var newPara = document.createElement("p");
	var newParaParent = $("mydiv");
	newParaParent.appendChild(newPara);
	newPara.setAttribute("id", "displayedresponse");
	newPara.appendChild(responceMSG);
	$("myresponse").value="";
};
remove = function (){
	var paraRemove = $("displayedresponse");
	var container = paraRemove.parentNode;
	container.removeChild(paraRemove);

};