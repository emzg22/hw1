/*
Name: Emily Gomez
Date created: 2/3/25
Date last edited: 2/7/25
Version: 1.1
Description: JavaScript code for homework 1
Additional Notes: I used w3schools to find how to do these two functions for hw1
*/

//code for dynamic date
const date = new Date();
let text = date.toLocaleDateString();
document.getElementById("date").innerHTML = text;

//code for slider
let slider = document.getElementById("range");
let output = document.getElementById("slider");
output.innerHTML = slider.value;

slider.oninput = function () 
{
    output.innerHTML = this.value;
};
