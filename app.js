
//Funktion som uppdaterar "character length siffran när man sliderar på slidern"
//Först behöver det finnas en eventlistener på slidern
//Denna eventlisterner lyssnar på om det är 1-10
//Den ska sedan uppdatera siffran som är till höger
updatesSliderNumber()
copyPassword()



let password = document.getElementById("generatedPassword")
function generatePassword() {
    const sliderValueElement = document.getElementById("sliderValue");
    const sliderValue = Number(sliderValueElement.textContent);

    const includeUppercaseLetter = document.getElementById("uppercase").checked;
    const includelowercaseLetter = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    let chars = ""
    if (includeUppercaseLetter) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includelowercaseLetter) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()";

    if (chars === "") {
        document.getElementById("generatedPassword").textContent = "Select an option!";
        return;
    }

    let password = "";
    for (let i = 0; i < sliderValue; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    document.getElementById("generatedPassword").textContent = password

    document.querySelectorAll(".strength-bar").forEach(element => {
        element.style.backgroundColor = "transparent";
    });

    // Uppdatera styrkan baserat på villkor
    if (sliderValue < 4) {
        document.querySelector(".strength-bar:nth-child(1)").style.backgroundColor = "white";
        document.querySelector(".qualityIndicator p").textContent = "Weak!";
    }
    else if (sliderValue >= 4 && sliderValue < 6) {
        document.querySelectorAll(".strength-bar:nth-child(-n+2)").forEach(element => {
            element.style.backgroundColor = "white";
        });
        document.querySelector(".qualityIndicator p").textContent = "Fair!";
    }
    else if (sliderValue >= 6 && sliderValue < 8) {
        document.querySelectorAll(".strength-bar:nth-child(-n+3)").forEach(element => {
            element.style.backgroundColor = "white";
        });
        document.querySelector(".qualityIndicator p").textContent = "Good!";
    }
    else if (sliderValue >= 8) {
        document.querySelectorAll(".strength-bar").forEach(element => {
            element.style.backgroundColor = "white";
        });
        document.querySelector(".qualityIndicator p").textContent = "Great!";
    }
}

function updatesSliderNumber() {
    const slider = document.querySelector(".slider");
    const sliderValue = document.getElementById("sliderValue");

    if (!slider || !sliderValue) {
        return;
    }

    function updateSlider() {
        const value = slider.value;
        sliderValue.textContent = value;
        const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.background = `linear-gradient(to right, #A638F6 ${percent}%, #24232C ${percent}%)`;
    }

    slider.addEventListener("input", updateSlider);

    updateSlider();
}




