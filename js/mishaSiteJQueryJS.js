$(document).ready(function() {
  $(".jumbotron").fadeIn("slow");
  $("#About").hover(function() {
      $("#bgAbout").animate({ opacity: 1 }, { duration: 1000 });
          //background-image: "url('http://mishakuzma.weebly.com/uploads/6/6/2/4/66248371/background-images/1834286649.jpg')"
    },
      function() {
        $("#bgAbout").animate({ opacity: 0 }, { duration: 1000 });
      });

//  $("#projects").hover(function() {

//  });
//  $("#mapping").hover(function() {

//  });
//  $("#contact").hover(function() {

//  });
});
