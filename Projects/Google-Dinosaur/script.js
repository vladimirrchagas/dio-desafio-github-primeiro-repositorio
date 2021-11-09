const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
const gameOver = document.querySelector(".game-over");
const playAgainButton = document.querySelector(".play-again");

let isJumping = false;
let isPlayAgain = false;

const handleKeyUp = (event) => {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

const playAgain = () => {
    location.reload();
}

const jump = () => {
    let position = 0;

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            // Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;                    
                } else {
                    position -=20;
                    dino.style.bottom = position + 'px';
                }
            }, 20)
        } else {
            // Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }

        
    }, 20);
}

const createCactus = () => {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && !isJumping && !isPlayAgain) {
            // Game Over
            clearInterval(leftInterval);
            gameOver.classList.toggle('hide');
            dino.style.transform = "rotate(90deg)";
            isPlayAgain = true;
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp)
playAgainButton.addEventListener('click', playAgain)