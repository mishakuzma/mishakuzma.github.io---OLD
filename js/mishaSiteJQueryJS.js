$(document).ready(function() {
  $(".jumbotron").fadeIn("slow");
  $("#about").hover(function() {
      //$(this).animate(function() {
          //background-image: "url('http://mishakuzma.weebly.com/uploads/6/6/2/4/66248371/background-images/1834286649.jpg')"
          alert("Hi");
        }, // remove comma
        //,
        //"slow"
      //)
    //  ;

    //},
    function() {
      alert("Bye");
  //  }
  );

//  $("#projects").hover(function() {

//  });
//  $("#mapping").hover(function() {

//  });
//  $("#contact").hover(function() {

//  });
});
