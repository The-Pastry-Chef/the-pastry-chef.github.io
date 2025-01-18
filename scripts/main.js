// variable for changing the main image
const myImage = document.querySelector("img");
// variables for user based welcome message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/dungeon-1.jpeg") {
        myImage.setAttribute("src", "images/dungeon-2.jpeg");
    } else {
        myImage.setAttribute("src", "images/dungeon-1.jpeg");
    }
});

// asks for the user name and stores it PLUS checks for null
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName}. It's dungeons time!`;
    }
}

// checks if a username is stored and if not asks for it
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}. It's dungeons time!`;
}

// buttons for changing the name
myButton.addEventListener("click", () => {
    setUserName();
});