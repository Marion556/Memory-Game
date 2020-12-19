const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let cardCount = 0;
let firstDiv = null;
let secondDiv = null;
let cardOneColor = null;
let cardTwoColor = null;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  cardCount++;
  console.log(event.target);
  
  if (cardCount === 1){
    event.target.style.backgroundColor = event.target.classList.value;
    cardOneColor = event.target.classList.value;
    firstDiv = event.target;
  }

  if (cardCount === 2){
    event.target.style.backgroundColor = event.target.classList.value;
    cardTwoColor = event.target.classList.value;
    secondDiv = event.target;
  }

  if((cardCount === 2 && cardTwoColor !== cardOneColor) || firstDiv === secondDiv){
    setTimeout(function(){
      firstDiv.style.backgroundColor = null;
      secondDiv.style.backgroundColor = null;
      cardCount = 0;
    }, 1000)
  }
  
  if (cardCount === 2 && cardTwoColor === cardOneColor){
    setTimeout(function(){
      cardCount = 0;
    }, 1000)
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);