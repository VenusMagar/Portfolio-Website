
function displayTime()
{
	//Initializing
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	//Displaying AM or PM using terniary operator
	var amPm = (hours < 12 ) ? "AM" : "PM";

	//Converting into 12-hrs format using terniary operator
	hours = (hours > 12) ? (hours - 12) : hours;

	//Extracting last two characters to display 2 digits time using string slice method
	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	//Displaying time
	document.getElementById('time').innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm;
	setTimeout(displayTime, 500);
}
