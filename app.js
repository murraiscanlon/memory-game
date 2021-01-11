//TODO Get reset button working


document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name:'brain',
            img: 'images/brain.png'
        },
        {
            name:'brain',
            img: 'images/braintxt.png'
        },
        {
            name:'bump-switch',
            img: 'images/bump-switch.png'
        },
        {
            name:'bump-switch',
            img: 'images/bumpswitchtxt.png'
        },
        {
            name:'gyro',
            img: 'images/gyro.png'
        },
        {
            name:'gyro',
            img: 'images/gyrotxt.png'
        },
        {
            name:'motor',
            img: 'images/motor.png'
        },
        {
            name:'motor',
            img: 'images/motortxt.png'
        },
        {
            name:'range-finder',
            img: 'images/range-finder.png'
        },
        {
            name:'range-finder',
            img: 'images/rangefindertxt.png'
        },
        {
            name:'touch-led',
            img: 'images/touch-led.png'
        },
        {
            name:'touch-led',
            img: 'images/touchledtxt.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    let resultDisplay = document.querySelector('#result')
    let resetButton = document.querySelector('.button') //this doesn't work yet
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    //create your board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            //alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            //alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay = 'Congratulations! You found them all!'
            alert(resultDisplay)
        }
    }


    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 1000)
        }
    }


    createBoard()



})