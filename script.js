
let timesClicked = 0;   

const button = document.getElementById('myFunction');
const textRundor = document.getElementById("timesClicked");
const quoteText = document.getElementById("quote");
const quotes = ["Go Tisha!", "Team Tisha is the best!", "Keep up the great work, Team Tisha!", ];
function buttonPressed() {
    
    timesClicked++;
    textRundor.textContent = timesClicked;
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomQuoteIndex];
    alert(randomQuote);
}

button.addEventListener('click', buttonPressed);
    



