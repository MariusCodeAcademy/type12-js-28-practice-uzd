'use strict';
console.log('dom.js');

const ourColors = ['yellow', 'green', 'tomato'];
let currentColorIndex = 0;

// Taikomes
const btn1 = document.getElementById('colorfull');
const boxes = document.querySelectorAll('.box');

// 1. padaryti kad paspaudus <button class="mt-20">Change color</button>
// pasikeistu visu dezuciu spalva i tomato
btn1.addEventListener('click', () => {
  console.log('color change please');
  console.log('boxes ===', boxes);
  // sukti cikla per boxes ir nuspalvinti bgColor
  changeBoxesColorTo(ourColors[currentColorIndex]);
  currentColorIndex++;
});

// 2. padaryti kad paspaudus keistusi spalvos is eiles geltona, zalia, raudona, raudona. raudona....

// 3. padaryti kad paspaudus keistusi spalvos is eiles geltona, zalia, raudona, geltona, zalia, raudona, geltona, zalia, raudona ....

function changeBoxesColorTo(colorValue) {
  boxes.forEach((box) => (box.style.backgroundColor = colorValue));
}
