$(document).ready(function(){
	$("tr:odd").css("background-color", "lightblue");
	$("table").hover(
		function(){
		$("tr:odd").css("background-color", "silver");
		$("tr:even").css("background-color", "lightblue");
		$("tr:first").css("background-color", "silver");
	},
		function(){
		$("tr:odd").css("background-color", "lightblue");
		$("tr:even").css("background-color", "silver");
	}
	);
}
);