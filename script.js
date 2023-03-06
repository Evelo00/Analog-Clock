const body = document.querySelector("body")
hourHand = document.querySelector(".hour")
minuteHand = document.querySelector(".minute")
secondHand = document.querySelector(".second")
modeSwitch = document.querySelector(".mode-switch")

if(localStorage.getItem("mode") === "Dark Mode") {
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

//añadimos un click event listener a modeSwitch
modeSwitch.addEventListener("click", () => {
    //toggle the "dark" clas on the body element
    body.classList.toggle("dark");
    // revisar si la clase "dark" esta presente en el elemento del body
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
    // console.log(isDarkMode);
})

const updateTime = () => {
    // console.log("time")
    //toma el tiempo actual y calcula el movimiento de las manos del reloj
    let date =new Date(),
    secToDeg = (date.getSeconds() / 60) *360;
    minToDeg = (date.getMinutes() / 60) * 360;
    hrToDeg = (date.getHours() / 12) * 360;
    // console.log(secToDeg);
    // rotar las manos del relojs de forma apropiada basado en el tiempo actual
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;

}


// Llamar updateTime para las manos del rejos cada segundo
setInterval(updateTime,1000);

//llamamos updateTime function al cargar la pagina
updateTime();