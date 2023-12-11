const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const qrBtn = document.getElementById("qrButton");
const displayText = document.getElementById("displaytext");

let targetURL = "";

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let userInput = document.getElementById("userInput");

function generateQR() {
  if (userInput.value.length > 0) {
    targetURL = URL + userInput.value;
    qrImage.src = targetURL;

    displayText.innerHTML = userInput.value;
    //   console.log(userInput.value);

    imgBox.classList.add(".imgBox-on");
    imgBox.classList.remove(".imgBox-off");
  } else {
    alert("Enter text or URL");
  }
}
