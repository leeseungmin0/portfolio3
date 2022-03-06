'use strict'

let container = document.querySelector('.container')
let homeContainer = document.querySelector('.home__container')
let slide = document.querySelectorAll('.home__slide');
let count = slide.length;
let currentIdx = 0;

for(let i=0; i<count; i++){
    slide[i].style.left = i*100 +'%'
    currentIdx=i
}

