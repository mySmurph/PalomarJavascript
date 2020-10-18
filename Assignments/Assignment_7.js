$(document).ready(function(){
	$('#mysubmit').click(function(){
		var firstName=$('#first_name').val().trim();
			if (firstName==''){
				$('#first_error').text('You must enter your first name');
				return;
			}else{
				$('#first_error').text('');
			};
		var lastName=$('#last_name').val().trim();
			if (lastName==''){
				$('#last_error').text('You must enter your last name');
				return;
			}else{
				$('#last_error').text('');
			};
		var gen=$('input[type="radio"]:checked').val();
			if($('input[type="radio"]').is(':checked')){
				$('#gender_error').text('');
			}else{
				$('#gender_error').text('You must select a gender');
				return;
			};
			
		var gender='';
			if(gen=='M'){
				gender='Male';
			}else{
				gender='Female';
			};
			
		var experience=$('select[id="years"]').val()
			if(experience=='-'){
				$('#years_error').text('You must enter your years of experience');
				return;
			}else{
				$('#years_error').text('');
			};
		
		var stats='<h2>Employment Stats for '+firstName+' '+lastName+'</h2><p>You are a: '+gender+'<br>You have: '+experience+' years experience</p><br>';
		
		$('#message').css('background','yellow').html(stats);
	return false;
	})
})