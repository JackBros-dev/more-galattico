const messages = [
  "Il mio amore per te è infinito 💫",
  "Ogni stella rappresenta un momento con te ✨",
  "Sei il mio universo, il mio tutto 🌌",
  "Ti amerò oltre il tempo e lo spazio ❤️",
];

const msgDiv = document.getElementById("messages");

let i = 0;
function showMessage() {
  if (i >= messages.length) return;
  msgDiv.innerText = messages[i];
  msgDiv.style.opacity = 0;
  msgDiv.style.animation = "fadeIn 2s ease-in-out forwards";
  i++;
  setTimeout(showMessage, 5000);
}
showMessage();

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 300);
