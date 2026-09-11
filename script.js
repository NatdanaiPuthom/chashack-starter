
let timesClicked = 0;   

const button = document.getElementById('myFunction');
const textRundor = document.getElementById("timesClicked");
function buttonPressed() {
    alert('Hail Team Tisha!'); 
    timesClicked++;
    textRundor.textContent = timesClicked;
}

button.addEventListener('click', buttonPressed);
    


