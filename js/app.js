// // DOM - Document Object Model
// //

// const game = {
//     score: 10,
//     players: ['jim', 'liz']
// }

// game.players.forEach(function(player) {
//     // create the li element
//     const liEl = document.createElement('li')
    
// })

// printScore = (score) => {
//     return `The score is ${score}`
// }

// const scoreEl = document.querySelector('#score')

// console.log(scoreEl);

// // css Selectors to call querySelector stuff

// // scoreEl.innerText = 9

// // const sillyEl = document.querySelector('.silly')
// // sillyEl.innerText = "This is not silly enough"

// scoreEl.innerText = printscore(12);



// // Use the forEach method on the players array to print out:
// // The player in jim
// // The player is liz

// // game.players.forEach(function(player) {
// //     console.log(`The player is ${player}`)
// // })

// game.players.forEach(player => {
//     console.log(`The player is ${player}`)
// })

// // Print out 'liz'

// console.log(game.players[1]);

// // Define a function called printScore that takes an arguement that 
// // represents the score and prints the message "The score is whatever"

// // function printScore(score) {
// //     return `The score is ${score}`
// // }

// // console.log(printScore(game.score))

//===========================================================================

// DOM - DOCUMENT OBJECT MODEL
//  

// const game = {
// 	score: 10,
// 	players: ['Jim', 'Liz']
// }

// // inside of the ul, 
// // we want ad <li> tags that have the following
// // <li>Jim</li>
// // <li>Liz</li>

// // select the ul so we can put tags inside of it
// const ulEl = document.querySelector('ul')

// game.players.forEach(function(player){
// 	// create the li element!
// 	const liEl = document.createElement('li');
// 	// add the text to the empty liEl
// 	liEl.innerText = player;
// 	console.log(liEl)
//     // add the liEl to our ulEl to put on the DOM (the screen)
//     ulEl.appendChild(liEl)

// })


// function printScore(score){
// 	return `The score is ${score}`
// }


// const scoreEl = document.querySelector('#score')
// console.log(scoreEl)

// // css Selectors (Google this any work inside querySelector)
// // tagName example, 'h1', 'p', 'div', 'h3', etc
// // className example '.fruits', '.tacos', etc
// // id example, '#score', '#player-1', '#player-2', etc

// scoreEl.innerText = printScore(19);





// // Use the forEach method on the players array 
// // print out 
// // The player is Jim
// // The player is Liz
// game.players.forEach(function(player){
// 	console.log(`The player is ${player}`)
// })


// // Print out "Liz"
// console.log(game.players[1])

// // define a function called printScore that takes argument which
// // represents the score, 
// // and returns a message "The score is 10"
// //Call you function

// // defining our function

// printScore(25)

// // // function expression
// // const printEndGame = function(){

// // }

//===========================================================

const game = {
	score: 10,
	players: ['Jim', 'Liz']
}
const ulEl = document.querySelector('ul')

const btnEl = document.querySelector('button')

const clearBtnEl = document.querySelector('#clear-players')

clearBtnEl.addEventListener('click', function(e) {
	ulEl.innerHTML = ""
	game.players = [];
})

// Event Propagation - set a listener to a whole section of page

//  When we click on an li, we want to create a strikethough the name

ulEl.addEventListener('click', function(e) {
	e.target.style.color = 'red';
	e.target.style.textDecoration = 'line-through';
})

btnEl.addEventListener('click', function(e) {
	console.log('button was clicked!')
	console.log(e);

	// grab input text and add it to game.players array
		// 1. Select the input using js
		// 2. Retrieve text from input (how do I retrieve the text from an input using js?)

	// const input = document.querySelector('input').value;
	// game.players.push(input);

	const inputEl = document.querySelector('input');
	game.players.push(inputEl.value);

	// const inputVal = document.querySelector('input').value
	// game.players.push(inputVal);

	inputEl.value = null;
	renderPLayers();
})




function renderPLayers () {

	ulEl.innerHTML = "" //Clears list so the whole list doesn't duplicated with each click

	game.players.forEach(function(player){
		const liEl = document.createElement('li');
		liEl.innerText = player;
		liEl.setAttribute('class', 'player')
		// console.log(liEl)
		ulEl.appendChild(liEl)
	})

}



// function printScore(score){
// 	return `The score is ${score}`
// }

// const scoreEl = document.querySelector('#score')
// console.log(scoreEl)

// scoreEl.innerText = printScore(19);

// scoreEl.style.color = 'red';
// scoreEl.style.backgroundColor = 'blue';

// const h1El = document.querySelector('h1')
// h1El.style.color = 'yellow';

// // querySelector ONLY selects the first element it finds
// //  selects AllquerySelectorAll of the specified element
// const playerEls = document.querySelectorAll('.player')
// console.log(playerEls)

// playerEls.forEach(el => {
// 	el.style.color = 'purple'
// })

// game.players.forEach(function(player){
// 	console.log(`The player is ${player}`)
// })

// console.log(game.players[1])

// printScore(25)

