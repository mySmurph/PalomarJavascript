var $ = function (id)
{
	return document.getElementById(id);
};

window.onload = function ()
{
	$("addpatron").onclick = addPatron;
	$("clearfields").onclick = clearFields;
	$("firstname").focus();
		
};
function addPatron()
{	var firstname = $("firstname").value.toUpperCase();		
	var lastname = $("lastname").value;		
	var email = $("email").value;		
	var city = $("city").value;	
	var donation = $("donation").value;
	var endMessage = $("endmessage");
	var isValid = validateItems (firstname, lastname, email, city, donation, endMessage);
	
	if (isValid)
	{
		$('myform').submit();
	};
};

function validateItems (firstname, lastname, email, city, donation, endMessage)
{
// id //

	var firstnameError = $("firstnameerror");
	var	firstnameErrorMSG = "Enter First Name";

	var lastnameError = $("lastnameerror");
	var lastnameErrorMSG = "Enter Last Name";

	var emailError = $("emailerror");
	var emailErrorMSG = "Enter Email";

	var cityError = $("cityerror");
	var cityErrorMSG = "Select a City from the list";

	var donError = $("donationerror");
	var donBlankErrorMSG = "Enter Donation Amount";
	var donnanErrorMSG = "Amount Must Be a Numeric";


	var endMsgError = "Patron Not Added!";
		
	var noError = "*";

// errors //

	if (firstname == ""){
		firstnameError.firstChild.nodeValue= firstnameErrorMSG;
		$("firstnameerror").style.color = "red";
	} else{
		firstnameError.firstChild.nodeValue= noError;
		$("firstnameerror").style.color = "black";
	};
	
	if (lastname == ""){
		lastnameError.firstChild.nodeValue= lastnameErrorMSG;
		$("lastnameerror").style.color = "red";
	} else{
		lastnameError.firstChild.nodeValue= noError;
		$("lastnameerror").style.color = "black";
	};
	
	if (email == ""){
		emailError.firstChild.nodeValue= emailErrorMSG;
		$("emailerror").style.color = "red";
	} else{
		emailError.firstChild.nodeValue= noError;
		$("emailerror").style.color = "black";
	};	
	
	if (city == "-"){
		cityError.firstChild.nodeValue= cityErrorMSG;
		$("cityerror").style.color = "red";
	} else{
		cityError.firstChild.nodeValue= noError;
		$("cityerror").style.color = "black";
	};
	
	if (donation == ""){
		donError.firstChild.nodeValue= donBlankErrorMSG;
		$("donationerror").style.color = "red";
	}else if (isNaN(donation)){
		donError.firstChild.nodeValue= donnanErrorMSG;
		$("donationerror").style.color = "red";
	}else{
		donError.firstChild.nodeValue= noError;
		$("donationerror").style.color = "black";
	};
	
	if (firstname == ""	||
	lastname == ""		||
	email == ""			||
	city == "-"			||
	donation == ""		||
	isNaN(donation)		)	
	{
		endMessage.firstChild.nodeValue= endMsgError;
		$("endmessage").style.color = "red";
	}else{
		return true;	
	};

};

function clearFields ()
{
// id //

	var firstnameError = $("firstnameerror");
	var lastnameError = $("lastnameerror");
	var emailError = $("emailerror");
	var cityError = $("cityerror");
	var donError = $("donationerror");
	var endMessage = $("endmessage");
	var noError = "*";

	$("firstname").value = "";
	$("lastname").value = "";		
	$("email").value = "";		
	$("city").value = "-";	
	$("donation").value = "";
	firstnameError.firstChild.nodeValue= noError;
		$("firstnameerror").style.color = "black";
	lastnameError.firstChild.nodeValue= noError;
		$("lastnameerror").style.color = "black";
	emailError.firstChild.nodeValue= noError;
		$("emailerror").style.color = "black";
	cityError.firstChild.nodeValue= noError;
		$("cityerror").style.color = "black";
	donError.firstChild.nodeValue= noError;
		$("donationerror").style.color = "black";
	endMessage.firstChild.nodeValue= noError;
		$("endmessage").style.color = "black";
};