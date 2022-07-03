const liElement = document.querySelectorAll('.item');

console.log(`Number of categories: ${liElement.length}`);

liElement.forEach(el => {
    const titleEl = el.querySelector('h2').textContent
    console.log(`Category: ${titleEl}`);
    const lengthEl = el.querySelectorAll('li')
    console.log(`Elements: ${lengthEl.length}`);
})