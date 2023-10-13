const sports = ["golf", "football", "cricket"];

const games = [
  {
    name: "Starcraft 2",
    released: "2010",
  },
  {
    name: "Age of Empires II",
  },
  {
    name: "Cyberpunk 2077",
    released: 2020,
  },
];

// Question 1

function printSeason(season) {
  console.log(season);
}

printSeason("summer");

// Question 2

function printNumbers(firstNumber, secondNumber) {
  console.log(firstNumber, secondNumber);
}

printNumbers(1, 2);

// Question 3

function addNumbers(firstNumber, secondNumber, thirdNumber) {
  const result = firstNumber + secondNumber + thirdNumber;
  return result;
}

const functionResult = addNumbers(3, 2, 3);

const total = document.querySelector(".total");
total.innerHTML += functionResult;

// Question 4

function createGreeting(name) {
  let greeting = "Hello, my name is " + name + ".";
  return greeting;
}

const nameContainer = document.getElementById("name");

nameContainer.innerHTML += createGreeting("Anna");

// Question 5

function printListItems(item) {
  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
  }
}

printListItems(sports);

// Question 6

function createGames(gamesList) {
  let html = "";

  for (let i = 0; i < gamesList.length; i++) {
    let releaseYear = "Unknown release date";
    if (gamesList[i].released) {
      releaseYear = gamesList[i].released;
    }

    html += `<div class="game">
                <h4>${gamesList[i].name}</h4>
                <p>${releaseYear}</p>
            </div>`;
  }

  return html;
}

const newHTML = createGames(games);

const gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = newHTML;
