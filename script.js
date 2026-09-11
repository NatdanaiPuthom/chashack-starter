// 1. Hitta knappen i HTML-dokumentet med hjälp av dess id
const knapp = document.getElementById('myFunction');

function buttonPressed() {
    alert('Kopplingen fungerar! Du klickade på knappen.');
}

knapp.addEventListener('click', buttonPressed);
