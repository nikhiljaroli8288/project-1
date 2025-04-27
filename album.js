const images = [
    { src: "dog.jpeg", alt: "First Photo" },
    { src: "d.jpeg", alt: "Second Photo" },
    { src: "c.jpg", alt: "Third Photo" }
];

let index = 0;

function updateImage() {
    const imgElement = document.getElementById("photo");
    imgElement.src = images[index].src;
    imgElement.alt = images[index].alt;
}

function changePhoto() {
    index = (index + 1) % images.length;
    updateImage();
}

function showPrevious() {
    index = (index - 1 + images.length) % images.length;
    updateImage();
}

// Function to change background color based on text input
function changeBackgroundColor() {
    const colorInput = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = colorInput;
}

// Function to change background color from color picker
function changeBackgroundColorFromPicker() {
    const colorPicker = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = colorPicker;
}

// Traffic Light Logic
let currentLight = 'red';

function changeTrafficLight() {
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');

    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');

    if (currentLight === 'red') {
        redLight.classList.add('active');
        currentLight = 'green';
    } else if (currentLight === 'green') {
        greenLight.classList.add('active');
        currentLight = 'yellow';
    } else if (currentLight === 'yellow') {
        yellowLight.classList.add('active');
        currentLight = 'red';
    }
}

// Change traffic light every 3 seconds
setInterval(changeTrafficLight, 3000);

// Initialize the traffic light with the first state
changeTrafficLight();

// Toggle Dark/Light Mode
function toggleLightDarkMode() {
    document.body.classList.toggle('dark-mode');
}