$(document).ready(function() {
  console.log("I'm ready.");
  $("#show-toggle").click(function() {
    console.log("You found me!");
    $("#initially-showing").hide();
    $("#initially-hidden").show();
  });

  $("#hide-toggle").click(function() {
    console.log("Where did I go?");
      $("#initially-showing").show();
      $("#initially-hidden").hide();
  });
});
