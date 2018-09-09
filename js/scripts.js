
// $(document).ready(function() {
//   console.log("I'm ready.");
//   $("#walrus-hidden").click(function() {
//     console.log("You found me!");
//     $("#walrus-showing").slideToggle();
//     $("#walrus-hidden").slideToggle();
//   });
//
//   $("#walrus-showing").click(function() {
//     console.log("Where did I go?");
//       $("#walrus-showing").slideToggle();
//       $("#walrus-hidden").slideToggle();
//   });
// });



$(document).ready(function() {
  console.log("I'm ready.");
  $(".clickable").click(function() {
    console.log("You found me!");
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  // $("#walrus-showing").click(function() {
  //   console.log("Where did I go?");
  //     $("#walrus-showing").slideToggle();
  //     $("#walrus-hidden").slideToggle();
  // });
});
