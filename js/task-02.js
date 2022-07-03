const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listItems = document.querySelector('#ingredients')

const listItemElement = ingredients.map(el => {
  const itemLi = document.createElement('li')
  itemLi.classList.add('item')
  itemLi.textContent = el
return itemLi
})


listItems.append(...listItemElement)