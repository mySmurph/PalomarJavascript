function $ (id){
	return document.getElementById(id);
};

var BeatlesArray;

window.onload = function(){
	$("john").onclick = addJohn;
	$("paul").onclick = addPaul;
	$("george").onclick = addGeorge;
	$("ringo").onclick = addRingo;
	$("showlist").onclick = showList;
	BeatlesArray = new Array();

};
showList = function (){
	var list = $("list");
	var listMSG = " ";

for(i=0; i<BeatlesArray.length; i++){
		listMSG += (i+1) + ". " + BeatlesArray[i];
		if ((i+1) == BeatlesArray.length){break;} 
		listMSG +=  ", ";
	};
	list.firstChild.nodeValue = listMSG;
};
addJohn = function (){
	this.border = '4px';
	this.style.color = 'yellow';	
//	$("john").border = "0px";
	$("paul").border = "0px";
	$("george").border = "0px";
	$("ringo").border = "0px";
	BeatlesArray.push("John");

};
addPaul = function (){
	this.border = '4px';
	this.style.color = 'yellow';	
	$("john").border = "0px";
//	$("paul").border = "0px";
	$("george").border = "0px";
	$("ringo").border = "0px";
	BeatlesArray.push("Paul");

};
addGeorge = function (){
	this.border = '4px';
	this.style.color = 'yellow';	
	$("john").border = "0px";
	$("paul").border = "0px";
//	$("george").border = "0px";
	$("ringo").border = "0px";
	BeatlesArray.push("George");

};
addRingo = function (){
	this.border = '4px';
	this.style.color = 'yellow';	
	$("john").border = "0px";
	$("paul").border = "0px";
	$("george").border = "0px";
//	$("ringo").border = "0px";
	BeatlesArray.push("Ringo");


};


