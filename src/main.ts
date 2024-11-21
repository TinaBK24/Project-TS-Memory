import './style.css'

const pairsClicked = document.querySelector('#pairsClicked') as HTMLSpanElement;
const pairsGuessed = document.querySelector('#pairsGuessed') as HTMLElement;

const gameBoard = document.querySelector('#game-board') as HTMLDivElement;
const newGameBtn = document.querySelector('#new-game-btn') as HTMLButtonElement;


// console.log(pairsClicked,pairsGuessed,gameBoard,newGameBtn);

let attempts = 0;
let matches = 0;
let firstCard: HTMLDivElement | null = null;
let secondCard: HTMLDivElement | null = null;

const emojiArray = [
  "🌭", "🍔","🍟","🍕","🧁","🍭","🍫","🍿","🍩","🍱","🍣","🥤",
  "🌭", "🍔","🍟","🍕","🧁","🍭","🍫","🍿","🍩","🍱","🍣","🥤"];

  let shuffleEmojiArray = emojiArray.sort(() => (Math.random() > .5 ) ? 1 : -1);
  for(let i = 0; i < emojiArray.length; i++) {
      const gameCard = document.createElement('div') as HTMLDivElement;
      gameCard.className = "game-card";
      gameCard.innerHTML = emojiArray[i];
      gameBoard.appendChild(gameCard);
  };
  console.log(shuffleEmojiArray);
  
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
      console.log("first = second");
      
      firstCard = null;
      secondCard = null
    } else {
      setTimeout(resetCard, 2000)
    }
    attempts++;
    pairsDisplay()
  }
}

function handleCardClick(card: HTMLDivElement){
  if (card === firstCard) {
    return console.log("Diese Karte wurde bereits ausgewählt.");
  }

  if(card.classList.contains('matched') || card.classList.contains('visible')){
    return console.log("Das ist matched oder visible")
  } 
    card.classList.add('visible');
    if(!firstCard){
      firstCard = card;
      console.log(`first card is ${card.textContent}`);
      
    } else {
      secondCard = card;
      console.log(`second card is ${card.textContent}`);

      checkForMatch()
    
  }
}

const allGameCards = document.querySelectorAll('.game-card');
allGameCards.forEach(card => {
  card.addEventListener('click', () => handleCardClick(card as HTMLDivElement))
})

function resetCard(){
  if(firstCard && secondCard){
    firstCard.classList.remove('visible');
    secondCard.classList.remove('visible');
  }
  firstCard = null;
  secondCard = null
}



newGameBtn?.addEventListener('click', () => {

})
