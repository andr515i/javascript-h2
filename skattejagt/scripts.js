// Generate a random position for the treasure
var treasureX = Math.floor(Math.random() * 400);
var treasureY = Math.floor(Math.random() * 400);
var attempts = 0;
var treasureRadius = 50; // Additional radius for click range

function handleClick(event) {
  attempts++;

  // Get mouse coordinates
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Check if the user has found the treasure
  var distance = Math.sqrt(
    Math.pow(mouseX - (treasureX + 10), 2) + // need to add 10 as thats the offset to center the treasure into the
      Math.pow(mouseY - (treasureY + 80), 2)
  );
  if (distance  <= treasureRadius) {
    alert("Congratulations! You've found the treasure!");

    ShowTreasure();
    setTimeout(resetGame, 15000);
  } else if (attempts === 5) {
    alert("You just couldn't find the treasure, let me show you where it is.");
    ShowTreasure();
  } else {
    // Determine the direction based on mouse position
    var directionX = mouseX < treasureX + 10 ? "right" : "left";
    var directionY = mouseY < treasureY + 80 ? "down" : "up";
    var direction =
      "The treasure is " + directionX + " and " + directionY + ".";

    alert(direction);
  }
}
function resetGame() {
  treasureX = Math.floor(Math.random() * 400);
  treasureY = Math.floor(Math.random() * 400);
  attempts = 0;
  var map = document.getElementById("map");
  map.innerHTML = "";
}
function ShowTreasure() {
  var map = document.getElementById("map");

  var treasure = document.createElement("div");
  treasure.className = "treasure";
  treasure.style.left = treasureX - 9 + "px";
  treasure.style.top = treasureY - 9 + "px";

  map.appendChild(treasure);

  var radius = document.createElement("div");
  radius.className = "treasure-radius";
  radius.style.left = treasureX - treasureRadius + "px";
  radius.style.top = treasureY - treasureRadius + "px";
  radius.style.width = treasureRadius * 2 + "px";
  radius.style.height = treasureRadius * 2 + "px";
  radius.style.backgroundImage =
    "radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)";
  map.appendChild(radius);
}

// Listen for clicks on the map
var map = document.getElementById("map");
map.addEventListener("click", handleClick);
