$(document).ready(function(){
	$( '#tabs' ).tabs();
	$( '#startDate' ).datepicker();
	
	$('#account').click(function(){
		var firstName= $('#firstName').val().trim();
			var firstError ='Please Enter First Name';
		var lastName= $('#lastName').val().trim();
			var lastError='Please Enter Last Name';
		var startDate= $('#startDate').val().trim();
			var startError='Please Enter Start Date';
		var accountError='Please Correct Errors and Try Again';
		var accountSuccess='Success: '+firstName+' '+lastName+'<br>Use the Start Date as your Password';
		
			if(firstName==''){
				$('#Error_firstName').text(firstError).css('color','red');
			}else{
				$('#Error_firstName').text('').css('color','black');
			};
			
			if(lastName==''){
				$('#Error_lastName').text(lastError).css('color','red');
			}else{
				$('#Error_lastName').text('').css('color','black');
			};
			
			if(startDate==''){
				$('#Error_startDate').text(startError).css('color','red');
			}else{
				$('#Error_startDate').text('').css('color','black');
			};
			
			if(firstName==''|| lastName==''||startDate==''){
				$('#account_status').html(accountError).css('color','red');
			}else{
				$('#account_status').html(accountSuccess).css('color','green');
			};
	})
		
	$( '#draggable-great, #draggable-poor' ).draggable();
	
var plan='';
	$( "#droppable" ).droppable({
		drop: function( event, ui ){
			plan =  ui.draggable.attr('value');
			$(this).addClass( "ui-state-highlight" ).find('p').html(plan +' Picked');
		}
	});
	
	$('#feelings').click(function(){
	
	 	var options = [];
	 	var callback = function(){
				setTimeout(function(){$('#dialog').fadeIn();}, 10 );
				};
				
		if(plan==''){
			$('#dialog').text("I Don't Know").effect('bounce', options, 1000, callback);
	 	}else if(plan=='Great Plan'){

	 		$('#dialog').text('Great!').css('color','green').effect('blind',options, 1000, callback);
	 	}else if(plan=='Poor Plan'){
	 		$('#dialog').text('My Head Hurts!').css('color','red').effect('shake',options, 1000, callback);
	 	};
	});

	
})