/////////////////ТРЕТИЙ ВАРИАНТ/////////////////

// const left = document.querySelector('#left');
// const right = document.querySelector('#right');
// const itemsList = document.querySelector('#items');

// const loop = (direction, e) => {
//   e.preventDefault();

//   if (direction == 'right') {
//     itemsList.appendChild(itemsList.firstElementChild);
//   } else {
//     itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
//   }
// }

// right.addEventListener('click', e => {
//   loop('right', e);
// })

// left.addEventListener('click', e => {
//   loop('left', e);
// })



/////////////////ВТОРОЙ ВАРИАНТ/////////////////

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const itemsList = document.querySelector('#items');
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll('.item');


const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShowItems = 300 / step;
const maxRight = (items.length - preShowItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener('click', e => {
  e.preventDefault();

  if (currentRight < maxRight) {
    currentRight += step;
    itemsList.style.right = `${currentRight}px`;
  }
})

left.addEventListener('click', e => {
  e.preventDefault();

  if (currentRight > minRight) {
    currentRight -= step;
    itemsList.style.right = `${currentRight}px`;
  }
})



/////////////////ПЕРВЫЙ ВАРИАНТ/////////////////

// const leftBtn = document.querySelector('#left');
// const rightBtn = document.querySelector('#right');
// const items = document.querySelector('#items');
// const computedStyles = getComputedStyle(items);

// rightBtn.addEventListener('click', e => {
//   e.preventDefault();

//   let currentRight = parseInt(computedStyles.right);

//   if (currentRight < 500) {
//     items.style.right = `${currentRight + 100}px`;
//   }
// });

// leftBtn.addEventListener('click', e => {
//   e.preventDefault();

//   let currentRight = parseInt(computedStyles.right);

//   if (currentRight > 0) {
//     items.style.right = `${currentRight - 100}px`;
//   }
// });