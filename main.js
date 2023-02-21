let scrollBtn = document.getElementById('scroll-btn');
let hiddenElement = document.querySelector('.nav');

function handleButtonClick() {
    hiddenElement.scrollIntoView({ block: "start", behavior: "smooth" });
}

scrollBtn.addEventListener('click', handleButtonClick);