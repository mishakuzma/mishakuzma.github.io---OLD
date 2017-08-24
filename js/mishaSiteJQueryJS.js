$(document).ready(function() {
  $(".jumbotron").fadeIn("slow");
  $("#about").hover(function() {
      $(this).animate({ opacity: 1 }, { duration: 3000 });
          //background-image: "url('http://mishakuzma.weebly.com/uploads/6/6/2/4/66248371/background-images/1834286649.jpg')"
    },
      function() {
        $(this).animate({ opacity: 0 }, { duration: 3000 })
      };
    );

//  $("#projects").hover(function() {

//  });
//  $("#mapping").hover(function() {

//  });
//  $("#contact").hover(function() {

//  });
});
