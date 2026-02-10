const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesSize = 1;

noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // make YES bigger each time
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1>YAYYYYY 💕🥰</h1>
    <p>best decision ever.</p>
  `;
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💕";
  
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
  
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  // create a heart every 300ms
  setInterval(createHeart, 300);
  