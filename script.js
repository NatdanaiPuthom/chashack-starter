
let timesClicked = 0;   

const button = document.getElementById('myFunction');
const textRundor = document.getElementById("timesClicked");
function buttonPressed() {
    alert('Hail Team Tisha!'); // 2. Visa ett alert-meddelande när knappen klickas
    timesClicked++;
    textRundor.textContent = timesClicked;
}

button.addEventListener('click', buttonPressed);
    


