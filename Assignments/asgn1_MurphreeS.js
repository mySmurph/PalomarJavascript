var first_name = 
	prompt("What is your first name?");
var age = 
	prompt("What is your age?");
	age=parseInt(age);
var sleep = 
	prompt("How much do you sleep per night?");
	sleep=parseInt(sleep);

document.write("Hi "+ first_name+ "\. You have slept "+ age*(sleep/24)+ " years of your life away!");