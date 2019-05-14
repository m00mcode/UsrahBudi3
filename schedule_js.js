$(document).ready(function(){
    $("#box").hide(); //hide the box
    $("#b").click(function(){ //when click button id B
    $("#box").slideDown(7000); // it will slide down and take 7 seconds
    $("#b").hide();// then will hide the button id B
  });



});
