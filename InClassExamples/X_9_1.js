$(document).ready(function(){
	$("#john").click(function(){		//in box start
		var johnCopy = $("#john").clone(false);
		johnCopy.attr('id','johncopy')
		$("#johnbox").append(johnCopy).attr('id','johnboxfull');
		$('h2').html('John is in the box!').css('color','red');
	}
	)			//in box stop
	$("#removejohn").click(function(){		//out box start
		$('h2').html('Click John to put him in the Box').removeAttr('style');
		$("#johncopy").remove();
		$('#johnboxfull').attr('id','johnbox');
	}
	)		//out box stop
}
)