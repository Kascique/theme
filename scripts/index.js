//open menu
$("#menuBtn").click(function () {
  $("#menu").css("width", "300px");
});
//close menu
$("#menuClose").click(function () {
  $("#menu").css("width", "0px");
});

//Change Launch time
var launchTime = "2020/12/10";

$("#days").countdown(launchTime, function (event) {
  $(this).text(event.strftime("%D"));
});
$("#hours").countdown(launchTime, function (event) {
  $(this).text(event.strftime("%H"));
});
$("#minutes").countdown(launchTime, function (event) {
  $(this).text(event.strftime("%M"));
});
$("#seconds").countdown(launchTime, function (event) {
  $(this).text(event.strftime("%S"));
});
