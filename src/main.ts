import './style.css'

const pairsClicked = document.querySelector('#pairsClicked') as HTMLSpanElement;
const pairsGuessed = document.querySelector('#pairsGuessed') as HTMLElement;

const gameBoard = document.querySelector('#game-board') as HTMLDivElement;
const newGameBtn = document.querySelector('#new-game-btn') as HTMLButtonElement;


console.log(pairsClicked,pairsGuessed,gameBoard,newGameBtn);

const emojiArray = ["🌭", "🍔","🍟","🍕","🧁","🍭","🍫","🍿","🍩","🍱","🍣","🥤","🌭", "🍔","🍟","🍕","🧁","🍭","🍫","🍿","🍩","🍱","🍣","🥤"];

let shuffleEmojiArray = emojiArray.sort(() => (Math.random() > .5 ) ? 2 : -1);
for(let i = 0; i < emojiArray.length; i++) {
    const gameCard = document.createElement('div') as HTMLDivElement;
    gameCard.className = "game-card";
    gameCard.innerHTML = emojiArray[i];
    gameBoard.appendChild(gameCard);
};
console.log(shuffleEmojiArray);

newGameBtn?.addEventListener('click', () => {

})
