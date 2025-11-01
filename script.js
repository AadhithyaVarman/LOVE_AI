// Countdown timer
const targetDate = new Date("2025-03-18").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  timer.textContent = `${days} Days 💕`;
}, 1000);

// Popup reveal
const popup = document.getElementById("popup");
const revealBtn = document.getElementById("reveal-btn");
const closeBtn = document.getElementById("close-btn");

// Hide popup on load
window.addEventListener("load", () => {
  popup.classList.add("hidden");
});

// Reveal popup
revealBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Optional: Close popup by clicking outside it
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.add("hidden");
});

// Smooth fade highlight for gallery images
const images = document.querySelectorAll(".gallery img");
let index = 0;

function cycleImages() {
  images.forEach((img, i) => {
    img.style.transition = "opacity 0.8s ease";
    img.style.opacity = i === index ? "1" : "0.6";
  });
  index = (index + 1) % images.length;
}
setInterval(cycleImages, 2500);

// Background music autoplay control (mobile-friendly)
const music = document.getElementById("bg-music");
music.volume = 0.3;

// Allow playback only after user interaction (browsers block autoplay)
const enableMusic = () => {
  music.play().catch(() => {});
  document.removeEventListener("click", enableMusic);
  document.removeEventListener("touchstart", enableMusic);
};
document.addEventListener("click", enableMusic);
document.addEventListener("touchstart", enableMusic);
