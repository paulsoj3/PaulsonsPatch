// JavaScript Document
/* Zack Kavaluskis & Jack Paulson
   11/11/2019, Dr. Kinuthia, ISYS 288-001
   A javascript file to display greeting on the about page
*/

//Store messages in an array
var text1 = [
    [0, 4, "Good Night"], 
    [5, 11, "Good Morning"],         
    [12, 17, "Good Afternoon"],
	[17, 20, "Good Evening"],
    [20, 24, "Good Night"]
];
   
// function called to change welcome message based on the time of day
function  printGreeting()
{
	var greeting;
	var A = document.getElementById("time");
	var time = new Date().getHours();

	// for loop with i iiterator
for(var i = 0; i < text1.length; i++)
{
	// if statement to find out and display message 
    if(time >= text1[i][0] && time <= text1[i][1])
	{
        greeting = (text1[i][2]);
		A.innerHTML = greeting;
    }
}
}