const minusBtnEl = document.querySelector('[data-action="decrement"]')
const plusBtnEl = document.querySelector('[data-action="increment"]')
const resultEl = document.querySelector('#value')
let counterValue = 0

const handleClickPlus = (event) => {
   resultEl.textContent = counterValue += 1
}

const handleClickMinus = (event) => {
    resultEl.textContent = counterValue -= 1 
    if (counterValue < 0) {
        resultEl.textContent = `Ой, а за минус нельзя`
    }
}

plusBtnEl.addEventListener('click', handleClickPlus)
minusBtnEl.addEventListener('click', handleClickMinus)