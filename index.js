import { cards } from "./cardVals.js"

//setting constants for elements on the page
const dealerUpImage = document.getElementById('dealer-up-image')
const dealerDownImage = document.getElementById('dealer-down-image')
const playerFirstImage = document.getElementById('player-first-image')
const playerSecondImage = document.getElementById('player-second-image')

const dealerTotalLabel = document.getElementById('dealer-total-label')
const dealerTotalCount = document.getElementById('dealer-total-count')

const playerTotalLabel = document.getElementById('player-total-label')
const playerTotalCount = document.getElementById('player-total-count')

const buyInInput = document.getElementById('buy-in-input')
const balanceDisplay = document.getElementById('balance')
const changingMessage = document.getElementById('changing-message')

let balance
let dealerUpCard
let dealerDownCard
let playerFirstCard
let playerSecondCard

//gets random number from 1 to 52 and uses that card
function getCard() {
    let cardNum = Math.floor(Math.random() * 52)
    console.log(cardNum)
    return cardNum
}

function cardImage(whichCard, whichImage) {
    whichImage.src = `./resources/${whichCard.name}.webp`
    whichImage.height = '100'
    whichImage.style.marginRight = '5px'
}

document.getElementById('buy-in-submit').addEventListener('click', () => {
    // if (!(buyInInput.value >= 1)){
    //     alert('buy in must be greater than none')
    // } else {
        balance = buyInInput.value 
        balanceDisplay.innerHTML = balance
        buyInInput.style.display = 'none'
        document.getElementById('buy-in-submit').style.display = 'none'
        changingMessage.innerHTML = ''

        dealerUpCard = cards[getCard()]
        dealerDownCard = cards[getCard()]
        playerFirstCard = cards[getCard()]
        playerSecondCard = cards[getCard()]

        console.log(`${dealerUpCard.name}, ${dealerDownCard.name}, ${playerFirstCard.name}, ${playerSecondCard.name}`)
        
        cardImage(dealerUpCard, dealerUpImage)
        dealerDownImage.src = './resources/Card_Back.jpeg'
        dealerDownImage.height = '100'
        dealerDownImage.style.marginRight = '5px'

        cardImage(playerFirstCard, playerFirstImage)
        cardImage(playerSecondCard, playerSecondImage)

        playerTotalLabel.innerHTML = 'Player Total: '
        playerTotalCount.innerHTML = (playerFirstCard.value + playerSecondCard.value).toString()
    // }
})
