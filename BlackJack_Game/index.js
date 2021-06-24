let firstCard = 6
let secondCard = 6
let cards = [firstCard,secondCard]
let sum = firstCard+secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")

const startGame = () => renderGame()
const renderGame = () =>{
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    let cardtext = ""
    for(card of cards){
        cardtext += card + " "
    }
    cardsEl.textContent = "Cards: " +cardtext
    sumEl.textContent = "Sum: " + sum

}

const newCard = () =>{
    newCardVarible = 9
    cards.push(newCardVarible)
    sum += newCardVarible
    startGame()
}
