// JavaScript Document
/* Zack Kavaluskis & Jack Paulson
   11/11/2019, Dr. Kinuthia, ISYS 288-001
   A javascript document to display messages when forms are used on FAQ page
*/

// variable to hold text that is going to be displayed 
var msg = 'Thank you for telling us how we can improve!'

// function that makes the suggestion box work 
function sugFunction()
{
document.getElementById("sug");
var A = document.getElementById("display");
A.innerHTML = msg;
	return false;
}

// function that makes check box change text when user selects what made them have a good visit
function reasonForBadVisit()
{
	// holder variables 
	var box1;
	var box2;
	var box3;
	var box4;
	var box5;
	var text2;
	
	// connects to html
	text2 = document.getElementById("text1");
	box1 = document.getElementById("selection");
	box2 = document.getElementById("rude");
	box3 = document.getElementById("rotten");
	box4 = document.getElementById("busy");
	box5 = document.getElementById("wait");
	
	// if statements that changes text based on what the user selects 
	if(box1.checked == true )
	{
		text2.innerHTML = "Sorry You were unable to find what you wanted."	
		return false;
	}
	if(box2.checked == true )
	{
		text2.innerHTML = "We sincerly apologies if our staff was rude. We will try to do better next time"	
		return false;
	}
	if(box3.checked == true )
	{
		text2.innerHTML = "Sorry our produce not fresh. We pride ourselves on provided fresh vegstables to the community. We hope it wont happen again."	
		return false;
	}
	if(box4.checked == true )
	{
		text2.innerHTML = "Sorry we were busy. We try to keep things moving as fast as we can."	
		return false;
	}
	if(box5.checked == true )
	{
		text2.innerHTML = "Sorry you had to wait. We try to keep things moving as fast as we can."	
		return false;
	}
	
}