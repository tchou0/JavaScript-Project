const a = 1; // Assigns the value 1 to the variable a
const b = 2; // Assigns the value 2 to the variable b

// Function to generate a random number between 1 and 6
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

// Generate two random numbers between 1 and 6
const randomNumber1 = getRandomInt(1, 6);
const randomNumber2 = getRandomInt(1, 6);

// Generate two random dice images
const randomDiceImage1 = `dice${randomNumber1}.png`;
const randomDiceImage2 = `dice${randomNumber2}.png`;

// Generate the source for the dice images
const randomDiceImageSource1 = `images/${randomDiceImage1}`;
const randomDiceImageSource2 = `images/${randomDiceImage2}`;

// Get the two images on the page
const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];

// Set the source of the images
image1.setAttribute("src", randomDiceImageSource1);
image2.setAttribute("src", randomDiceImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}   
