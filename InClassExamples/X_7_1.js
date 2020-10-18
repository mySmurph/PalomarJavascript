$(document).ready(function(){
	$("#clickme").click(function(){
		var lastName = $("#lastname").val();
		var firstName =$("#firstname").val();
		$("#message").text("Your full name is "+ firstName +" "+ lastName);
	
	}
	)
}
)