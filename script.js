// script.js
const noBtn = document.querySelector(".no-btn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.querySelector(".yes-btn").addEventListener("click", () => {
    document.querySelector(".container").innerHTML = `
        <h1>เย้! 💕 เราเป็นแฟนกันแล้ว! 🥰</h1>
        <p>ฉันจะทำให้คุณมีความสุขที่สุดเลยนะ 😊</p>
        <img src="https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif" alt="Celebration" style="width: 200px; margin-top: 20px;">
    `;
});