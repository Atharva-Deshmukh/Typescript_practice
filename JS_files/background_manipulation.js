/*
Program to change the background color as per the input from the user
*/
var color = prompt("Enter any color");
if (color.trim() !== "") {
    document.body.style.background = color;
}
