'use strict';

cards.map((item, id) => {
    let div = document.createElement('div');
    let numberCard = document.createElement('div');
    div.append(numberCard);
    numberCard.classList.add('numberCards');
    div.classList.add(item.type, 'cards');
    div.style.zIndex = id;
    div.style.left = id * 60 + 'px';
    document.querySelector('.cardsWrapper').append(div);
    numberCard.innerHTML = id + 1;
});

let wrapper = document.body.querySelector('.wrapper');
let cardsWrapper = wrapper.querySelector('.cardsWrapper');
let card = cardsWrapper.querySelectorAll('.cards');
let cardsCount = card.length - 1;
let pressedShift = false;
let pressedAlt = false;
let wideCards = [];

cardsWrapper.addEventListener('mouseover', () => {
    wrapper.style.backgroundColor = 'white';
});
cardsWrapper.addEventListener('mouseout', () => {
    wrapper.style.backgroundColor = '#e9e6d3';
});
cardsWrapper.addEventListener('click', () => {
    let card = cardsWrapper.querySelectorAll('.cards');

    console.log(cardsCount);
    if (pressedShift && !pressedAlt) {
        let isWideCard = document.querySelectorAll('.cards')[cardsCount];
        if (isWideCard.classList.contains('wide')) {
            console.log('is wide');
            isWideCard.classList.remove('wide');
            isWideCard.classList.add('narrow');
            wideCards.push(cardsCount);
            console.log(wideCards);
        }
        let id = cardsCount + 1;
        let div = document.createElement('div');
        let numberCard = document.createElement('div');
        div.append(numberCard);
        numberCard.classList.add('numberCards');
        div.classList.add('narrow', 'cards');
        div.style.zIndex = id;
        div.style.left = id * 60 + 'px';
        document.querySelector('.cardsWrapper').append(div);
        numberCard.innerHTML = id + 1;
        cardsCount++;
        return;
    }
    if (pressedAlt && pressedShift) {
        let isWideCard = document.querySelectorAll('.cards')[cardsCount];
        if (isWideCard.classList.contains('wide')) {
            console.log('is wide');
            isWideCard.classList.remove('wide');
            isWideCard.classList.add('narrow');
            wideCards.push(cardsCount);
            console.log(wideCards);
        }
        let id = cardsCount + 1;
        let div = document.createElement('div');
        let numberCard = document.createElement('div');
        div.append(numberCard);
        numberCard.classList.add('numberCards');
        div.classList.add('wide', 'cards');
        div.style.zIndex = id;
        div.style.left = id * 60 + 'px';
        document.querySelector('.cardsWrapper').append(div);
        numberCard.innerHTML = id + 1;
        cardsCount++;
        return;
    }

    card[cardsCount].remove();
    cardsCount--;
    if (wideCards.indexOf(cardsCount) != -1) {
        let isWideCard = document.querySelectorAll('.cards')[cardsCount];
        isWideCard.classList.remove('narrow');
        isWideCard.classList.add('wide');
    }
    console.log(cardsCount);
    console.log('____________________________');
});

document.addEventListener('keydown', (e) => {
    if (e.code == 'ShiftLeft') {
        pressedShift = true;
    }
    if (e.code == 'AltLeft') {
        pressedAlt = true;
    }
});
document.addEventListener('keyup', (e) => {
    if (e.code == 'ShiftLeft') {
        pressedShift = false;
    }
    if (e.code == 'AltLeft') {
        pressedAlt = false;
    }
});

