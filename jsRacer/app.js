console.log("Can I kick it?");

// document.getElementsByClassName("race_track")
//
//
// const buildArray = () => {
//   let track = [];
//   for (var i = 0; i < race_track.length; i++) {
//     race_track[i]
//   }
// }
//
// const moveCar = () => {


// const players = [
//
//
// ]
//
//
// // // this will go through all the pieces of road
// const buildArray = () => {
// 	let road1 = [];
// 	for(let i=0; i<table.length; i++) {
// 		let move = squares[i].innerHTML;
// 		track.push(move)
//

// Get the container element
var btnContainer = document.getElementById("player1_strip");

// Get all buttons with class="btn" inside the container
var line1 = btnContainer.getElementsByClassName("mile");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < line1.length; i++) {
  line1[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}

var btnContainer = document.getElementById("player2_strip");

// Get all buttons with class="btn" inside the container
var line2 = btnContainer.getElementsByClassName("mile2");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < line1.length; i++) {
  line2[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  });
}


document.addEventListener('keydown', (key1) => {

  if (key1.which == 68) {

    alert("d was pressed")
  }

});
//
document.addEventListener('keydown', (key1) => {

  if (key1.which == 39) {
    alert("Left arrow was pressed")
  }

});
