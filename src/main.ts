import './style.css'

const pairsClicked = document.querySelector('#pairsClicked') as HTMLSpanElement;
const pairsGuessed = document.querySelector('#pairsGuessed') as HTMLElement;

const gameBoard = document.querySelector('#game-board') as HTMLDivElement;
const newGameBtn = document.querySelector('#new-game-btn') as HTMLButtonElement;


console.log(pairsClicked,pairsGuessed,gameBoard,newGameBtn);

let attempts = 0;
let matches = 0;
let firstCard: HTMLDivElement | null = null;
let secondCard: HTMLDivElement | null = null;

const emojiArray = [
  "🌭", "🍔","🍟","🍕","🧁","🍭","🍫","🍿","🍩","🍱","🍣","🥤",
  "🌭", "🍔","🍟","🍕","🧁","🍭","🍫","🍿","🍩","🍱","🍣","🥤"];

  let shuffleEmojiArray = emojiArray.sort(() => (Math.random() > .5 ) ? 1 : -1);

function pairsDisplay(){
  pairsClicked.textContent = `${attempts}`;
  pairsGuessed.textContent = `${matches}`;
}

function checkForMatch(){
  if(firstCard && secondCard){
    if(firstCard.textContent === secondCard.textContent){
      matches++;
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      firstCard = null;
      secondCard = null
    } else {
    }
  }
  pairsDisplay()
}

function resetCard(isMatch: boolean){
  firstCard = null;
  secondCard = null
}


for(let i = 0; i < emojiArray.length; i++) {
    const gameCard = document.createElement('div') as HTMLDivElement;
    gameCard.className = "game-card";
    gameCard.innerHTML = emojiArray[i];
    gameBoard.appendChild(gameCard);
};
console.log(shuffleEmojiArray);

newGameBtn?.addEventListener('click', () => {

})
