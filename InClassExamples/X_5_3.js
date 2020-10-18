function $ (id){
	return document.getElementById(id);
};

var myTransactions;

window.onload = function(){
	$("additem").onclick= processInfo;
	myTransactions= new Array();
};

processInfo = function(){
	
	var item= $("item").value;
	var amount= $("amount").value;
	var itemList= $("itemList");
		transaction= "";
		transactionsMSG= "";
	transaction= item+": "+amount;
	myTransactions.push(transaction);

	transactionsMSG = myTransactions.join("<br>")	
		
	$("itemList").innerHTML = transactionsMSG;
	
	$("item").value= "";
	$("amount").value= "";
	
};
