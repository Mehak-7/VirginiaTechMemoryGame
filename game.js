// const cards = document.querySelectorAll('.memory-card');

// let hasFlipped = false;
// let board = false;
// let firstCard, secondCard;

// function flipCard()
// {
// 	if(board)
// 		return;
// 	if(this === firstCard)
// 		return;

// 	this.classList.add('flip');

// 	if(!hasFlipped)
// 	{
// 		hasFlipped = true;
// 		firstCard  = this;

// 		return;
// 	}

// 	secondCard = this;
// 	checkForMatch();
// }

// function checkForMatch()
// {
// 	let match = firstCard.dataset.framework === secondCard.dataset.framework;
// 	match ? disableCards() : unflipCards();
// }

// function disableCards()
// {
// 	firstCard.removeEventListener('click', flipCard);
// 	secondCard.removeEventListener('click', flipCard);

// 	resetBoard();
// }

// function unflipCards()
// {
// 	board = true;

// 	setTimeout(() => {
// 		firstCard.classList.remove('flip');
// 		secondCard.classList.remove('flip');

// 		resetBoard();
// 		}
// 		1500);
	
// }

// function resetBoard() {
// 	[flipCard, board] = [false, false];
// 	[firstCard, secondCard] = [null, null];
// }

// (function shuffle()
// {
// 	cards.forEach(card => {
// 		let randomPosition = Math.floor(Math.random() * 12);
// 		card.style.order = randomPosition;
// 	});
// })();

// cards.forEach(card => card.addEventListener('click', flipCard));

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));