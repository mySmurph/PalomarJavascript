$(document).ready(function(){
	$("#clickme").click(function(){
		
		$("#errorfirst").text('');
		$("#errorage").text('');
		$("#message").text('');
		var firstName = $("#firstname").val();
		var age = $("#age").val();
		
		if (firstName == ''){
			$("#errorfirst").text('Name is required');
			return;
		};
		
		if (age == ''){
			$("#errorage").text('Age is required');
			return;
		};
		
		if (age >=40){
			$("#message").text('Hi '+firstName+'.  You are over the hill.');
		}else{
			$("#message").text("Hi "+firstName+".  You are still young, don't sleep so much.");
		};
		
		
	}
	);
}
);