const originalWord = "education";
let scrambledWord = shuffleWord(originalWord);

const wordElement = document.getElementById('scrambled-word');
const letterContainer = document.getElementById('letter-container');
const resultElement = document.getElementById('result');

function shuffleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function displayLetters() {
    letterContainer.innerHTML = '';
    for (let i = 0; i < scrambledWord.length; i++) {
        const letter = document.createElement('div');
        letter.innerText = scrambledWord[i];
        letter.setAttribute('draggable', 'true');
        letter.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', letter.innerText);
        });
        letterContainer.appendChild(letter);
    }
}

function checkWord() {
    const userWord = letterContainer.innerText.replace(/\s/g, '');
    if (userWord === originalWord) {
        resultElement.innerText = "Correct! Well done!";
    } else {
        resultElement.innerText = "Incorrect. Try again!";
    }
}

wordElement.innerText = scrambledWord;
displayLetters();