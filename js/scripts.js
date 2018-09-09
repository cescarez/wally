$(document).ready(function() {
  console.log("I'm ready.");
  $("#show-toggle").click(function() {
    console.log("You found me!");
    $("#initially-showing").fadeOut();
    $("#initially-hidden").fadeIn();
  });

  $("#hide-toggle").click(function() {
    console.log("Where did I go?");
      $("#initially-showing").fadeIn();
      $("#initially-hidden").fadeOut();
  });
});
