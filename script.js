// Get the instruction
var instruction = document.querySelector(".instruction-container");

// Get the button that opens the instruction
var btn = document.querySelector(".instruction-button");

// Get the <span> element that closes the instruction
var span = document.querySelector(".close");

// When the user clicks on the button, open the instruction
btn.onclick = function() {
  instruction.style.display = "block";
}

// When the user clicks on <span> (x), close the instruction
span.onclick = function() {
  instruction.style.display = "none";
}

// When the user clicks anywhere outside of the instruction, close it
window.onclick = function(event) {
  if (event.target == instruction) {
    instruction.style.display = "none";
  }
}