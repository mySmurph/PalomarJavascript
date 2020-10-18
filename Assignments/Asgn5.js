function $ (id){
	return document.getElementById(id);
};
window.onload = function (){
	getDate();
	$("additem").onclick = addItem;
	$("sortitems").onclick = sortItem;
};
getDate = function (){
	var today = $('today');
	var date = new Date();
	var MM = date.getMonth()+1;
	var DD = date.getDate();
	var YY = date.getFullYear();
	var todayDate = MM +"/"+ DD +"/"+ YY;
	today.firstChild.nodeValue=todayDate;
};
addItem = function (){
	var newItemInput = document.createElement("input");
	var newInputParent = $("todolist");	
	
	newInputParent.appendChild(newItemInput);
	newItemInput.setAttribute("type","text");
	newItemInput.setAttribute("class","listitem");

	var br = document.createElement("br");
	newInputParent.appendChild(br);
};
sortItem = function (){

	var toDoList = [];
	var toDoItem = document.getElementsByClassName("listitem");
	
	for (var i=0;i<toDoItem.length;i++){
		toDoList.push(toDoItem[i].value);
	};
	
	toDoList.sort();

	var toDoListMSG = toDoList.join("<br>");
	
	var displayItems = $("displayitems");
	displayItems.innerHTML = toDoListMSG;
};