const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const bgBodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const onChangeBtnEvent = event => {
  const hrex = getRandomHexColor()
  textEl.textContent = hrex;
  bgBodyEl.style.backgroundColor = hrex;
};

btnEl.addEventListener('click', onChangeBtnEvent);