$(document).ready(function() {

var height = parseFloat(prompt("Enter a height in inches:"));

if(height < 36){
	alert("You are too short to ride");
  $(".shortHeightRide").addClass("highlight");
} else if(height < 90 && height >= 36 ){
  alert("You are tall enough for all rides.");
  $(".shortHeightRide").addClass("highlight");
  $(".mediumHeightRide").addClass("highlight");
}
else if (height >=90)
{
  alert("Too tall to ride.")
  $(".shortHeightRide").addClass("highlight");
  $(".mediumHeightRide").addClass("highlight");
  $(".tallHeightRide").addClass("highlight");


}
})
