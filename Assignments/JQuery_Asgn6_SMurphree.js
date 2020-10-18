$(document).ready(function(){
var vacationALT;
var imageSource;
	$("img").hover(
		function(){
		$(this).css("border", "outset 10px")},
		function(){
		$(this).css("border", "none")}
	);
	$("img").click(function(){
		imageSource = $(this).attr("src");
		vacationALT = $(this).attr("alt");
		$("#currentimage").attr("src",imageSource).attr("alt",vacationALT);
		$("#bigimage").css("display","inline");
		$("#imagedesc").text(vacationALT);
	}
	);
	$("#showhidebutton").click(function(){
		$("#bigimage").css("display","none");
	}
	);
	$("#submitme").click(function(){
		$("span").text("");
		var firstName = $("#firstname").val();
		
		if (firstName == ""){
			$("span").text("name needed");
			return;
		}else{
			$("#mymessage").text(firstName+" you want a "+vacationALT);
		};
	}
	);

}
);