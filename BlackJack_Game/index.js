
let user = {
    name: "Abhishek",
    credits: "$110"
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const userDetails = document.getElementById("userDetails")
userDetails.textContent = user.name+": "+user.credits

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    const returnValue = randomNumber === 1? 11 : randomNumber > 10 ? 10 : randomNumber
    return returnValue
}
const startGame = () => {
    if(!isAlive)
    {
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard,secondCard]
    }
    sum = cards[0] + cards[1]
    renderGame()
    
}
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
    if(isAlive && !hasBlackJack)
    {
        newCardVarible = getRandomCard()
        cards.push(newCardVarible)
        sum += newCardVarible
        renderGame()
}
}
