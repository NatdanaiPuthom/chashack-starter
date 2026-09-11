// 1. Hitta knappen i HTML-dokumentet med hjälp av dess id
let timesClicked = 0;   

const button = document.getElementById('myFunction');
const textRundor = document.getElementById("timesClicked");
function buttonPressed() {
    alert('Kopplingen fungerar! Du klickade på knappen.');
    timesClicked++;
    textRundor.textContent = timesClicked;
}

button.addEventListener('click', buttonPressed);
    


