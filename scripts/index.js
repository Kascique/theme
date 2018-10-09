//open menu
$("#menuBtn").click(function(){
	$('#menu').css("width", "300px");
});
//close menu
$("#menuClose").click(function(){
	$('#menu').css("width", "0px");
});

  //Change Launch time
  var  lunchTime = "2019/12/10";
  
  $("#days")
  .countdown(lunchTime, function(event) {
    $(this).text(
      event.strftime('%D')
    );
  });
  $("#hours")
  .countdown(lunchTime, function(event) {
    $(this).text(
      event.strftime('%H')
    );
  });
  $("#minutes")
  .countdown(lunchTime, function(event) {
    $(this).text(
      event.strftime('%M')
    );
  });
  $("#seconds")
  .countdown(lunchTime, function(event) {
    $(this).text(
      event.strftime('%S')
    );
  });
