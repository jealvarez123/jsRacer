console.log("Can I kick it?");



// this calls the Container
var Container = document.getElementById("player1_strip");

// this calls the class
var line1 = Container.getElementsByClassName("mile");

// this replaces the mile tables with active1
for (var i = 0; i < line1.length; i++) {
  line1[i].addEventListener('keydown',(key1) => {
    if (key1.which == 68){
      console.log("this works");
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    current[i].className += " active1";
  }
  });
}

// this calls the Container
var Container = document.getElementById("player2_strip");

// this calls the class
var line2 = Container.getElementsByClassName("mile2");


for (var i = 0; i < line1.length; i++) {
  line2[i].addEventListener("keydown", function(key1) {
    if (key1.which == 39)


    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "").next();
    this.className += " active2";
  });
}




// document.addEventListener('keydown', (key1) => {
//
//   if (key1.which == 39) {
//     alert("Left arrow was pressed")
//   }
//
// });
