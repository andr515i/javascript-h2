var cardImages = [
  "./images/1.png",
  "./images/1.png",
  "./images/2.png",
  "./images/2.png",
  "./images/3.png",
  "./images/3.png",
  "./images/4.png",
  "./images/4.png",
  "./images/5.png",
  "./images/5.png",
  "./images/6.png",
  "./images/6.png",
  "./images/7.png",
  "./images/7.png",
  "./images/8.png",
  "./images/8.png",
  "./images/9.png",
  "./images/9.png",
  "./images/10.png",
  "./images/10.png",
  "./images/11.png",
  "./images/11.png",
  "./images/12.png",
  "./images/12.png",
];

// Shuffle the card images
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Function to create the memory cards
function createMemoryCards() {
  var table = document.getElementById("memoryTable");
  var shuffledImages = shuffle(cardImages);

  var cardIndex = 0;
  for (var i = 0; i < 4; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 6; j++) {
      var cell = document.createElement("td");
      cell.addEventListener("click", flipCard);
      cell.addEventListener("mouseover", function () {
        if (
          !this.classList.contains("flipped") &&
          !this.classList.contains("matched")
        ) {
          this.classList.add("hover");
        }
      });
      cell.addEventListener("mouseout", function () {
        if (
          !this.classList.contains("flipped") &&
          !this.classList.contains("matched")
        ) {
          this.classList.remove("hover");
        }
      });
      var image = document.createElement("img");
      image.src = "./images/0.png";
      cell.appendChild(image);
      var frontImage = document.createElement("img");
      frontImage.src = shuffledImages[cardIndex];
      frontImage.style.display = "none";
      cell.appendChild(frontImage);
      row.appendChild(cell);
      cardIndex++;
    }
    table.appendChild(row);
  }
}

// Function to flip the card when clicked
function flipCard() {
  if (
    this.classList.contains("flipped") ||
    this.classList.contains("matched")
  ) {
    return;
  }

  this.classList.remove("hover");
  this.classList.add("flipped");
  var frontImage = this.querySelector("img:last-child");
  frontImage.style.display = "block";

  // Check if two cards are flipped
  var flippedCards = document.getElementsByClassName("flipped");
  console.log(flippedCards.length);
  if (flippedCards.length == 2) {
    var card1 = flippedCards[0];
    var card2 = flippedCards[1];

    // Check if the two flipped cards match
    if (
      card1.querySelector("img:last-child").src ===
      card2.querySelector("img:last-child").src
    ) {
      // Match found
      card1.classList.add("matched");
      card2.classList.add("matched");
    } else {
      // No match, flip the cards back
      setTimeout(function () {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.classList.add("hover");
        card2.classList.add("hover");
        var frontImages = document.querySelectorAll(".flipped img:last-child");
        setTimeout(function () {
          frontImages.forEach(function(image) {
            image.style.display = "none";
          });   
          card1.classList.remove("matched");
          card2.classList.remove("matched");
        }, 500);
      }, 1000);
    }
  }
}

// Create the memory cards when the page loads
createMemoryCards();
