// Matrix
const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

const Before = document.querySelector(".End");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll("a");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const latinl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const latinu = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";

const alphabet = latinl + nums + latinu;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const colors = ["#ffe200", "#d40028", "#03fc33", "#0F0", "#b10af5"];
let Ccolor = colors[Math.floor(Math.random() * colors.length)];

const changeColor = () => {
  let idx = Math.floor(Math.random() * colors.length);
  Ccolor = colors[idx];
};

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = Ccolor;
  context.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

const activate = () => {
  // Clearing current screen
  Before.style.display = "none";
  navbar.style.backgroundColor = "white";

  // Changing links color
  links.forEach((link) => {
    link.style.color = "black";
  });

  // Matrix activate
  canvas.style.display = "inline";
  setInterval(draw, 30);

  // change color
  setInterval(changeColor, 2000);
};
