$(document).ready(function() {

var height = parseFloat(prompt("Enter a height in inches:"));

if(height < 36){
	alert("You are too short to ride");
} else if(height < 90 && height >= 36 ){
  alert("You are tall enough for all rides.");
  $(".mediumRides").show();
}
else if (height >=90)
{
  alert("Too tall to ride.")
  $(".tallRides").show();

}
})
