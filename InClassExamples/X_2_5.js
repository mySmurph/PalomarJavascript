
var first_name = 
	prompt( "What is your name?");

if (first_name=="Marry"||first_name=="Jane")
{
	var children=
	prompt("Do you have children? (Yes or No)")
		if(children=="Yes")
		{
			var oldest_age=
			prompt("How old is your oldest child?")
				if  (isNaN(oldest_age))
				{	alert("You have not entered a valid age")
				}
				else if (oldest_age<19)
				{	document.write("You still have kids at home")
				}
				else{
				document.write("Hopefully they have moved out of the house")
			}
		}
		else{ alert("It must be peaceful at home, "+first_name)
		}
	}
else{
	document.write ("Get back to work, " + first_name);
	}
