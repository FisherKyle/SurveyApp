

//Backend Logic
$(document).ready(function() {
//UI Logic
$("#mainsubmit").click(function(event) {
  event.preventDefault();
  var SSID =$("#SSID").val();
  var genderInput =$("#genderInput").val();
  var conceptionInput =$("#conceptionInput").val();
  var cologneInput =$("#cologneInput").val();
  var firstDateInput =$("#firstDateInput").val();
  var colorPantiesInput =$("#colorPantiesInput").val();
  var measurementsInput =$("#measurementsInput").val();

  $(".firstDate").text(firstDateInput);
  $(".SSID").text(SSID);
  $(".colorPanties").text(colorPantiesInput);
  $(".measurements").text(measurementInput);

  $("#results").show();

 });
});
