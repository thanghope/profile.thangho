
// Typing effect
const texts = [
  "Cyber mind behind the screen...",
  "Code. Hack. Repeat.",
  "Building the future in silence."
];
let count = 0, index = 0, currentText = "", letter = "";
function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typingText").textContent = letter;
  if (letter.length === currentText.length) {
    count++; index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 80);
  }
}
type();

// Matrix background
const canvas = document.querySelector(".matrix-bg");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let cols = Math.floor(width / 20);
let drops = Array(cols).fill(1);
function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#00ffcc";
  ctx.font = "16px monospace";
  drops.forEach((y, i) => {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, i * 20, y * 20);
    drops[i] = y * 20 > height && Math.random() > 0.975 ? 0 : y + 1;
  });
  requestAnimationFrame(drawMatrix);
}
drawMatrix();
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  cols = Math.floor(width / 20);
  drops = Array(cols).fill(1);
});

// Music control
function toggleMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}
