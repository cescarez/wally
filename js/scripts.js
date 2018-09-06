// $(document).ready(function() {
//   $("#wally").click(function() {
//     $(".walrus-showing").show();
//     $(".walrus-hidden").hide();
//   });
// });

// $(document).ready(function() {
//   console.log("I'm ready.");
//   $("#wally").click(function() {
//     console.log("CLICK!!!");
//     $(".walrus-showing").slideToggle();
//   });
//
// });

$(document).ready(function() {
  console.log("I'm ready.");
  $(".walrus-hidden").click(function() {
    console.log("You found me!");
    $(".walrus-showing").slideToggle();
    $(".walrus-hidden").slideToggle();
  });

  $(".walrus-showing").click(function() {
    console.log("Where did I go?");
      $(".walrus-showing").slideToggle();
      $(".walrus-hidden").slideToggle();
  });
});


  // $(document).ready(function() {
  //   console.log("I'm ready.");
  //   $(".clickable1").click(function() {
  //     console.log("You found me!");
  //     $(".walrus-showing").slideToggle();
  //     $(".walrus-hidden").slideToggle();
  // });
  //
  //   $(".clickable2").click(function() {
  //     console.log("Where did I go?");
  //     $(".walrus-showing").slideToggle();
  //     $(".walrus-hidden").slideToggle();
  // });
