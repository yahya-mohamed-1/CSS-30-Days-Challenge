const text = "30 Days of Creative CSS Challenge";
const typingText = document.querySelector('.typing-text');

// Split text into span for each character
typingText.innerHTML = text.split('').map(char => 
    `<span style="--i: ${Math.random() * 1 + 0.5}s">${char}</span>`
).join('');

// Add animation to each character
document.querySelectorAll('.typing-text span').forEach(span => {
    span.style.animation = `fadeIn ${span.style.getPropertyValue('--i')} forwards`;
});